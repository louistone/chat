var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var constants = require('./constants.json');
var cors  = require('cors');

//online users
var users = {};

var app = express();
var database;

//declare soeckt IO SERVER
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(cors());
MongoClient.connect(constants.database.url, function (err, db) {
  database = db;
});

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


io.on('connection', function(socket){
    socket.on('auth', function(jData){
        users[jData.username.replace('.','_')] = socket.id;
        console.log(users);
    })

    socket.on('message', function(jData){
        jNewData = {};
        jNewData.author = jData.author;
        jNewData.target = jData.author;
        jNewData.message = jData.message;

        addMessage(database, jData);
        addMessage(database, jNewData);
    })
})



app.post('/auth/signup', function(req, res){


    addUser(database, req.body).then(function () {
        res.status(200);
        res.end();
    })
    .catch(error => {
        res.status(400);
        res.end();
  })
})

app.post('/auth/login', function(req, res){

    loginUser(database, req.body).then(function(){
        res.status(200);
        res.end();
    })
    .catch(error => {
        res.status(400);
        res.end();
    })
})

app.get('/users', function( req, res){
    getUsers(database).then(users =>{
        res.json(users);
    });
})



server.listen(8080, function(){
    console.log("SERVER IS LISTENING ON PORT 8080")
})

function addUser(db, jData){
     return new Promise((resolve, reject) => {
        cUsers = database.collection('users');
        var jUser = {
        '_id': jData.email,
        'username': jData.email.replace('.','_'),
        'name': jData.username,
        'email': jData.email,
        'password':jData.password,
        'messages':{}
        }
    cUsers.insert(jUser,function(err, docs){
        if(docs.ops)
        resolve();

        else reject("email already in use");

    });
    })
    
}

function loginUser(db, jData){
    return new Promise( (resolve, reject) => {
        var cUsers = db.collection('users');
        var email = jData.email;
        var password = jData.password;
        var jUser = {'email':email, 'password': password};
        cUsers.find(jUser).limit(1).toArray(function(err, docs){
            if(docs[0])
                resolve(docs);
            else reject("username or password incorrect");
        })
    })

}

function getUsers(db){
    return new Promise(resolve => {
        var cUsers = db.collection('users');
        cUsers.find({}).toArray(function(err, docs){
            resolve(docs);
        })
    })

}

function addMessage(db, jData){
        
        cUsers = db.collection('users');
        cUsers.find({"username":jData.target}).limit(1).toArray(function(err, docs){
            var jUser = docs[0];
            
            var messages = jUser.messages;
            if(messages[jData.author]){
                messages[jData.author].push({"message":jData.message, "author":jData.author});
                cUsers.update({'username':jData.target},{$set:{'messages':messages}})
            }
            else{
                messages[jData.author] = {"message":jData.message, "author":jData.author};
                cUsers.update({'username':jData.target}, {$set:{'messages':messages}});
            }
            
        })
}
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NGValidators } from 'ng-validators';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    //initialize LoginForm
    this.loginForm = this.formBuilder.group({
      email:['',Validators.compose([Validators.required, NGValidators.isEmail()])],
      password:['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  
    
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

  //return if a field is valid
  fieldInvalid(fieldName){
    return this.loginForm.controls[fieldName].valid && this.loginForm.controls[fieldName].touched;
  }
}

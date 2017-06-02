import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NGValidators } from 'ng-validators';

import{ UserService } from '../services/user/user.service'; 
import{ Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder:FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    //initialize LoginForm
    this.loginForm = this.formBuilder.group({
      email:['',Validators.compose([Validators.required, NGValidators.isEmail()])],
      password:['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })
  
    
  }

  onSubmit(){
    this.userService.login(this.loginForm.value).then( () => this.router.navigate(['/home']) )
    .catch(error => alert(error));
  }

  //return if a field is valid
  fieldInvalid(fieldName){
    return this.loginForm.controls[fieldName].invalid && this.loginForm.controls[fieldName].touched;
  }
}

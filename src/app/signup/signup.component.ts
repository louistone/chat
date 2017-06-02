import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NGValidators } from 'ng-validators';

import { UserService } from '../services/user/user.service';
@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService : UserService, private router: Router) { }

  ngOnInit() {
    //initialize signupForm
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['',Validators.compose([Validators.required, NGValidators.isEmail()])],
      password:['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })

  }
  onSubmit(){
    this.userService.signup(this.signupForm.value).then(() => this.router.navigate(['/auth/login']))
    .catch(error => {
      alert(error);
    })
  }

    //return if a field is valid
  fieldInvalid(fieldName){
    return this.signupForm.controls[fieldName].invalid && this.signupForm.controls[fieldName].touched;
  }

}

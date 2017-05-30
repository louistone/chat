import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { NGValidators } from 'ng-validators';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    //initialize signupForm
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email:['',Validators.compose([Validators.required, NGValidators.isEmail()])],
      password:['', Validators.compose([Validators.required, Validators.minLength(5)])]
    })

  }
  onSubmit(){
    console.log(this.signupForm.value);
  }

    //return if a field is valid
  fieldInvalid(fieldName){
    return this.signupForm.controls[fieldName].invalid && this.signupForm.controls[fieldName].touched;
  }

}

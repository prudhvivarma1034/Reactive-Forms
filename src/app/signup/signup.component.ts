import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  signupUsers: any[] = [];

  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
    });
  }

  onSignup() {
   
    const signupObj = {
      userName: this.reactiveForm.value.username,
      email: this.reactiveForm.value.email,
      password: this.reactiveForm.value.password,
    };

    this.signupUsers.push(signupObj);
    localStorage.setItem('signupUsers', JSON.stringify(this.signupUsers));
    this.reactiveForm.reset();
  }

  ngOnInit(): void {

  }
}


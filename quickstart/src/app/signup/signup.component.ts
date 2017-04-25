import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  public user: any;
  public data: any;
  public error: any;
  signupForm: FormGroup;
  constructor( private userService: UserService, private formBuilder: FormBuilder ) {
    this.user = userService.userName;
    this.signupForm = this.formBuilder.group({
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]],
    });
  }
  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.userService.getHeroes()
      .subscribe((data: any) => {
          this.data = data;
          console.log("this.data", this.data)},
        (error:any) => {
          this.error = error;
          console.log("Error", this.error)
        }
      );
  }
  public signupUser() {
    console.log("####SignUp Form####", this.signupForm.value);
  }
}

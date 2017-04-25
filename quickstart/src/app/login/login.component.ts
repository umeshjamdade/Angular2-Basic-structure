import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {ToasterService} from 'angular2-toaster';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  public user: any;
  public data: any;
  public error: any;
  loginForm: FormGroup;
  private toasterService: ToasterService;

  constructor( private userService: UserService, toasterService: ToasterService, private formBuilder: FormBuilder, private router: Router ) {
    this.toasterService = toasterService;
    this.user = userService.userName;
    this.toasterService.pop('success', 'Successfully launch application');
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'password': ['', [Validators.required]],
    });
  }

  ngOnInit() { this.getHeroes(); }

    getHeroes() {
       this.userService.getHeroes()
                      .subscribe((data: any) => {
                          this.data = data;
                          console.log("this.data123", this.data)},
                          (error:any) => {
                            this.error = error;
                            console.log("Error", this.error);
                          }
                      );
    }

  public loginUser() {
    console.log("######Login form values###########",this.loginForm.value);
    this.router.navigate(['/dashboard/home']);
    // if (this.loginForm.dirty && this.loginForm.valid) {
    //   alert(`Name: ${this.loginForm.value.name} Email: ${this.loginForm.value.email}`);
    // }
  }

}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Route, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {signInWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat";
import auth = firebase.auth;
import {Auth} from "@angular/fire/auth";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passType: string = "password";
  isText: boolean = false;
  showIcon: string = "fa-eye-slash";
  showPadding: string = "pr-0.5";
  email:string = "wasd@wasd.com";
  pass:string = "555555"


  emailForm = new FormControl("wasd@wasd.com",Validators.email);
  passwordForm = new FormControl("555555",Validators.required);

  loginForm = new FormGroup({
    emailForm:this.emailForm,
    passwordForm:this.passwordForm
  })

  constructor( private authService :AuthenticationService, private router: Router) {}


  login(){
    let email:string = this.emailForm.value ? this.emailForm.value.toString() : "";
    let pass:string = this.passwordForm.value ? this.passwordForm.value.toString() : "";

    console.log(this.loginForm.value);
    if(this.loginForm.valid){
      this.authService.login(email,pass,
        ()=>{
          console.log("success");
         // this.router.navigate(['/home']);
        },
        ()=>{
          console.log("failed");
        }
        );
    }
  }


  ngOnInit(): void {
  }



  hideShowPassword(){
    this.isText = !this.isText;
    if(this.isText){
      this.showIcon = "fa-eye";
      this.passType = "text"
      this.showPadding = "pr-1"

    } else{
      this.showIcon = "fa-eye-slash";
      this.passType = "password";
      this.showPadding = "pr-0.5"
    }
  }

}

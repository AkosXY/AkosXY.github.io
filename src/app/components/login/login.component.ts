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
  showIcon: string = "fa-eye icon-padding";
  email:string = "wasd@wasd.com";
  pass:string = "555555"


  emailForm = new FormControl("wasd@wasd.com",Validators.email);
  passwordForm = new FormControl("555555",Validators.required);

  loginForm = new FormGroup({
    emailForm:this.emailForm,
    passwordForm:this.passwordForm
  })

  constructor( private authService :AuthenticationService) {}


  login(){
    let email:string = this.emailForm.value ? this.emailForm.value.toString() : "";
    let pass:string = this.passwordForm.value ? this.passwordForm.value.toString() : "";

    if(this.loginForm.valid){
      this.authService.login(email,pass,
        ()=>{
          //console.log("success");
        },
        ()=>{
          //console.log("failed");
        }
        );
    }
  }

  ngOnInit(): void {
  }


  hideShowPassword(){
    this.isText = !this.isText;
    if(this.isText){
      this.showIcon = "fa-eye-slash icon-padding-slash";
      this.passType = "text"
      
    } else{
      this.showIcon = "fa-eye icon-padding";
      this.passType = "password";
    }
  }

}

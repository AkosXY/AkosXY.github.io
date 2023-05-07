import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators, ValidatorFn, ValidationErrors, Form} from '@angular/forms'
import { AuthenticationService } from 'src/app/services/authentication.service';
import {signInWithEmailAndPassword} from "firebase/auth";
import firebase from "firebase/compat";
import auth = firebase.auth;

export function passwordMatchValidator(): ValidatorFn {
  return (control): {[key: string]: any} | null => {
    const newPass = control.get('newPassForm')?.value;
    const newPassConfirm = control.get('newPassComfirmForm')?.value;
    return newPass === newPassConfirm ? null : { passwordDontMatch: true };
  };
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passType: string = "password";
  isText: boolean = false;
  showIcon: string = "fa-eye icon-padding";
  loginView:boolean = true;

  emailFormFocused = false;
  passwordFormFocused = false;


  emailForm = new FormControl("wasd@wasd.com",[ Validators.email, Validators.required]);
  passwordForm = new FormControl("555555",Validators.required);

  loginForm = new FormGroup({
    emailForm:this.emailForm,
    passwordForm:this.passwordForm
  })
  
  newEmailForm = new FormControl("",[ Validators.email, Validators.required]);
  newPassForm = new FormControl("",Validators.required);
  newPassComfirmForm = new FormControl("",Validators.required);
  
  signupForm = new FormGroup({
    newEmailForm: this.newEmailForm,
    newPassForm: this.newPassForm,
    newPassComfirmForm: this.newPassComfirmForm,
  }, { validators: passwordMatchValidator() });

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

  signup(){
    let email:string = this.newEmailForm.value ? this.newEmailForm.value.toString() : "";
    let pass:string = this.newPassForm.value ? this.newPassForm.value?.toString() : "";

    if(this.signupForm.valid){
      this.authService.signup(email,pass)
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

  toggleLoginView(){
    this.loginView = !this.loginView;
  }

  emailInvalid(emailForm:FormControl):boolean{
    return (emailForm.dirty && emailForm.hasError('required') || emailForm.touched && emailForm.hasError('email')) && !this.emailFormFocused;
  }

  passwordInvalid(passwordForm:FormControl):boolean{
    return (passwordForm.dirty && passwordForm.hasError('required')) && !this.passwordFormFocused;
  }



}

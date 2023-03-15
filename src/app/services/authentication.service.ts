import { Injectable } from '@angular/core';
import {Auth, idToken} from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { from } from 'rxjs';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private loginState:boolean = false;
  constructor(public angularFireAuth: AngularFireAuth,  private router: Router) { }

  login(email:string, password:string, onSuccess:any, onError:any){
    this.angularFireAuth.signInWithEmailAndPassword(email,password)
      .then(result =>{
        console.log(result);
        result.user?.getIdTokenResult().then(idToken=>{
          console.log(idToken);
        })
        onSuccess();
        this.router.navigate(['/']);
        this.loginState = true;
        sessionStorage.setItem('loginState', 'true');
        console.log(sessionStorage.getItem('loginState'))
      })
      .catch(error => {
        console.log(error);
        onError();
      })
  }

  logout(){
    this.angularFireAuth.signOut()
      .then(()=>{
        this.router.navigate(['/login']);
        this.loginState = false;
        sessionStorage.setItem('loginState', 'false');
        console.log(sessionStorage.getItem('loginState'))
      })
  }

  getLoginState():string{
    //return this.loginState;
    console.log("session state:"+sessionStorage.getItem('loginState') + "bool value: "+  Boolean(sessionStorage.getItem('loginState')) );
    return sessionStorage.getItem('loginState') || 'false';
  }



}

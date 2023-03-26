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
  private loginUser: string = "";
  private user_id: string = "";
  
  constructor(public angularFireAuth: AngularFireAuth,  private router: Router) { }

  login(email:string, password:string, onSuccess:any, onError:any){
    this.angularFireAuth.signInWithEmailAndPassword(email,password)
      .then(result =>{
       // console.log(result);
        result.user?.getIdTokenResult().then(idToken=>{
          console.log("user_id: " + idToken.claims['user_id']);
          this.user_id = idToken.claims['user_id']
          sessionStorage.setItem('user_id', this.user_id);
        })
        onSuccess();
        this.router.navigate(['/']);
        this.loginState = true;
        sessionStorage.setItem('loginState', 'true');
        this.loginUser = email;
        sessionStorage.setItem('loginUser', email);

       // console.log(sessionStorage.getItem('loginState'))
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
        sessionStorage.setItem('loginUser', "");
       // console.log(sessionStorage.getItem('loginState'))
      })
  }

  getLoginState():string{
    return sessionStorage.getItem('loginState') || 'false';
  }

  getUserId():string{
    return sessionStorage.getItem('user_id') || '';
  }


}

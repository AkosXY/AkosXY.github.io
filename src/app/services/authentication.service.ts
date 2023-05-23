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
          result.user?.getIdTokenResult().then(idToken=>{
            this.user_id = idToken.claims['user_id']
            sessionStorage.setItem('user_id', this.user_id);
        })
        onSuccess();
        this.router.navigate(['/mydevices']);
        sessionStorage.setItem('selected','/mydevices')
        this.loginState = true;
        sessionStorage.setItem('loginState', 'true');
        this.loginUser = email;
        sessionStorage.setItem('loginUser', email);
      })
      .catch(error => {
        console.log(error);
        onError();
      })
  }

  signup(email:string, password:string){
    this.angularFireAuth.createUserWithEmailAndPassword(email,password)
    .then(result =>{
      console.log(result)
      console.log("signup Success");
      alert("sikeres regisztráció")
      this.login(email, password, ()=>{
        //console.log("success");
      },
      ()=>{
        //console.log("failed");
      })
    })
    .catch(error => {
      console.log(error);
      alert("regisztráció sikertelen")
    })

  }

  logout(){
    this.angularFireAuth.signOut()
      .then(()=>{
        this.router.navigate(['/login']);
        this.loginState = false;
        sessionStorage.setItem('loginState', 'false');
        sessionStorage.setItem('loginUser', "");
        sessionStorage.setItem('selected', "");
      })
  }

  forgotPassword(email:string){
    this.angularFireAuth.sendPasswordResetEmail(email).then(result =>{
      console.log(result)
      alert("Jelszóváltoztató email elküldése sikeres volt.")
    })
    .catch(error => {
      console.log(error);
      alert("Email elküldése sikertelen, kérjük ellenőrízze, hogy helyes-e a megadott email címe. Amennyiben nincs fiókja kérjük válassza a regisztáció opciót.")
    })

  }

  getLoginState():string{
    return sessionStorage.getItem('loginState') || 'false';
  }

  getUserId():string{
    return sessionStorage.getItem('user_id') || '';
  }

  getUserEmail():string{
    return sessionStorage.getItem('loginUser') || '';

  }

}

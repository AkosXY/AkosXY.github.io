import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabLoot-Angular';
  constructor(private authService :AuthenticationService) { }

  isLoggedIn():boolean{
    let loggedIn = this.authService.getLoginState();
    if(loggedIn == "true"){
      return true;
    } else{
      return false;
    }
  }
}



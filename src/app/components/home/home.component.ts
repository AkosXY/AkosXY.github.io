import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../login/login.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService :AuthenticationService, private router:RoutingService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

  loginPage(){
    this.router.navigate('/login');
  }

  getLogin():string {
    return this.authService.getLoginState();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { from, Subscription, switchMap } from 'rxjs';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private authService :AuthenticationService) { }

  @Output() isCollapsed = new EventEmitter<boolean>();
  isSidebarCollapsed = false;

  ngOnInit(): void {
  }

  print(){
    console.log(sessionStorage.getItem('loginUser'));
  }

  getLogin():string {
    return this.authService.getLoginState();
  }

  getUser(){
    return sessionStorage.getItem('loginUser');
  }



  toggleSidebar(){
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
    this.isCollapsed.emit(this.isSidebarCollapsed);
  }
 


}

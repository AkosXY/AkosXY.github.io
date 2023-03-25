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
  static expandIcon = "fa-solid fa-angles-down fa-rotate-90 icon-small"
  static hamburgerIcon = "fa-sharp fa-solid fa-bars"
  icon = NavComponent.hamburgerIcon;


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
    if(this.icon == NavComponent.expandIcon){
      this.icon = NavComponent.hamburgerIcon;
    } else{
      this.icon = NavComponent.expandIcon;
    }
    this.isCollapsed.emit(this.isSidebarCollapsed);
  }
 


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  static devices = "/mydevices";
  static readonly pending = '/pending';
  static readonly new = '/newdevice';
  
  sidebarVisible = true;
  selected = ""

  constructor(private router: Router, private authService :AuthenticationService) { }

  ngOnInit(): void {
  
  }

  showSideBar(){
    this.sidebarVisible = !this.sidebarVisible;
  }

  navigate(url:string){
    this.router.navigate([url]);
    this.selected = url;
  }

  logout(){
    this.authService.logout();
  }
  

}

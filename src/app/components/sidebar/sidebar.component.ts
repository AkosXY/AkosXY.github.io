import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  sidebarVisible = true;
  selected = ""

  constructor(private router: Router, private authService :AuthenticationService) { }

  ngOnInit(): void {
    this.selected = sessionStorage.getItem('selected') || '';
  }

  showSideBar(){
    this.sidebarVisible = !this.sidebarVisible;
  }

  navigate(url:string){
    sessionStorage.setItem('selected', url);
    this.selected = url;
    this.router.navigate([url]);
  }

  logout(){
    this.authService.logout();
  }
  

}

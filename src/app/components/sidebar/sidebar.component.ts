import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  
  sidebarVisible = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }

  showSideBar(){
    this.sidebarVisible = !this.sidebarVisible;
  }

  isLoggedIn(){
    return false;
  }

  navigate(url:string){
      this.router.navigate([url]);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() showSidebar: Boolean = true;

  constructor(private authService :AuthenticationService, private routing:RoutingService) { }

  ngOnInit(): void {
  }

  navigate(url:string){
   this.routing.navigate(url);
  }
  
  selected():string{
    return this.routing.getSelected() 
  }

  logout(){
    this.authService.logout();
  }
  

}

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication.service";

@Injectable({
    providedIn:"root"
})

export class RoutingService{

    selected = "/mydevices";
    static defaultPage = "/mydevices";  

    constructor( private router: Router, private authService:AuthenticationService) { }
    
    ngOnInit(): void {
        this.selected = sessionStorage.getItem('selected') || RoutingService.defaultPage;
        console.log("loaded")
        this.router.navigate([this.selected])
    }
    
    navigate(url:string){
        sessionStorage.setItem('selected', url);
        this.selected = url;
        this.router.navigate([url]);
    }

    getSelected():string{
        return sessionStorage.getItem('selected') || RoutingService.defaultPage;
    }

    getApi(){
        this.selected = sessionStorage.getItem('selected') || RoutingService.defaultPage;
        switch(this.selected){
            case "/mydevices":
            return "admin/myDevices?providerId=" + this.authService.getUserEmail();
            case "/pending":
            return "admin/myDevices?providerId=" + this.authService.getUserEmail();
            default:
            return "";  
        }

    }

}
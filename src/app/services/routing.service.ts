import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { map, Observable } from "rxjs";
import { Device } from "../interface/device.interface";
import { DevicestateEnum } from "../interface/devicestate.enum";

@Injectable({
    providedIn:"root"
})

export class RoutingService{

    selected = "";

    constructor(  private router: Router) { }

    
    ngOnInit(): void {
        this.selected = sessionStorage.getItem('selected') || '';
    }
    
    
    navigate(url:string){
        sessionStorage.setItem('selected', url);
        this.selected = url;
        this.router.navigate([url]);
    }

    getSelected():string{
        return sessionStorage.getItem('selected') || '';
    }

    getApi(){
        switch(this.selected){
            case "/mydevices":
            return "/getAllDevices"
            case "/pending":
            return "/user/freeDevices"
            default:
            return ""   
        }

    }

}
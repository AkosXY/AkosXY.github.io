import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class DeviceService{
    
    private apiUrl = "https://labloot.azurewebsites.net";
    constructor(private http:HttpClient){}

    getDevices(): Observable<any[]> {        
        return this.http.get<any[]>(this.apiUrl + "/getAllDevices");
      }
   
}
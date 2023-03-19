import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { DevicestateEnum } from "../interface/devicestate.enum";

@Injectable({
    providedIn:"root"
})

export class DeviceService{
    
    private apiUrl = "https://labloot.azurewebsites.net";
    constructor(private http:HttpClient){}

    getDevices(): Observable<any[]> {        
        return this.http.get<any[]>(this.apiUrl + "/getAllDevices");
    }

    
    getStateString(state: DevicestateEnum): string {
        switch (state) {
            case DevicestateEnum.FREE:
            return 'Free';
            case DevicestateEnum.REQUESTED:
            return 'Requested';
            case DevicestateEnum.IN_USE:
            return 'In use';
            case DevicestateEnum.RETURNED:
            return 'Returned';
            default:
            return '';
        }
    }
}
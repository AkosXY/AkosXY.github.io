import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Device } from "../interface/device.interface";
import { DevicestateEnum } from "../interface/devicestate.enum";

@Injectable({
    providedIn:"root"
})

export class DeviceService{
    
    private apiUrl = "https://labloot.azurewebsites.net/";
    constructor(private http:HttpClient){}

    getDevices(url: string): Observable<Device[]> {        
        return this.http.get<Device[]>(this.apiUrl + url,{
            observe:"response"
        }
        ).pipe(
            map(items => {
                console.log(items.status)
                return items.body || []
            })
        )   
    }   

    postDevice(device: Device){
        let url = this.apiUrl + "admin/uploadDevice";
        this.http.post<Device>(url, device,{
            observe:"response"
        }).pipe(
            map(resp => {
                console.log(resp.status)
            })
        )
        .subscribe()
    }


    getStateLabel(state: keyof typeof DevicestateEnum){
        return DevicestateEnum[state];
    }

    getStateColor(state: keyof typeof DevicestateEnum){
        switch(DevicestateEnum[state]){
            case DevicestateEnum.FREE:
            return 'green';
            case DevicestateEnum.REQUESTED:
            return 'yellow';
            case DevicestateEnum.RETURNED:
            return 'yellow';
            case DevicestateEnum.IN_USE:
            return 'red';
            default:
            return "";
        }
    }

}
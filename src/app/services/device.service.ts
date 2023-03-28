import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, retry } from "rxjs";
import { Device } from "../interface/device.interface";
import { DevicestateEnum, getKeyByValue } from "../interface/devicestate.enum";
import { AuthenticationService } from "./authentication.service";
import { RoutingService } from "./routing.service";

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

    postDevice(device: Device): Observable<boolean>{
        let url = this.apiUrl + "admin/uploadDevice";
        return this.http.post<Device>(url, device,{
            observe:"response"
        }).pipe(
            map(resp => {
                console.log(resp.status);
                if(resp.status == 200){
                    alert("Sikeres felvétel");
                    return true;
                }else{
                    alert("Sikertelen felvétel");
                    return false;
                }
            })
        )
    }

    deleteDevice(device: Device): Observable<boolean>{
        let url = this.apiUrl + "admin/deleteDevice";
        return this.http.post<Device>(url, device,{
            observe:"response"
        }).pipe(
            map(resp => {
                console.log(resp.status);
                if(resp.status == 200){
                    alert("Sikeres törlés");
                    return true;
                }else{
                    alert("Sikertelen törlés");
                    return false;
                }
            })
        )
    }

    changeDeviceState(device: Device, state:DevicestateEnum): Observable<boolean>{
        let url = this.apiUrl + "admin/updateDevice";
        device.state = getKeyByValue(state)

        return this.http.post<Device>(url, device,{
            observe:"response"
        }).pipe(
            map(resp => {
                console.log(resp.status);
                if(resp.status == 200){
                    alert("Sikeres frissítés");
                    return true;
                }else{
                    alert("Sikertelen frissítés");
                    return false;
                }
            })
        )
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
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Device, NULL_DEVICE } from "../interface/device.interface";
import { DevicestateEnum, getKeyByValue } from "../interface/devicestate.enum";

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

    updateDevice(device: Device): Observable<boolean>{
        let url = this.apiUrl + "admin/updateDevice";
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

    changeDeviceState(device: Device, state:DevicestateEnum): Observable<boolean>{

        let actualDevice = this.getDeviceState(device);
        console.log(actualDevice.state)
        if(device.state !== actualDevice.state){
            return new Observable<boolean>((observer) => {
                observer.next(false);
                observer.complete();
                alert("Az eszköz állapota megváltozott így a módosítást nem sikerült véghezvinni, kéjük frissítse a listát")
              });
        } else{
            let url = this.apiUrl + "admin/updateDevice";
            if(state == DevicestateEnum.FREE){
                device.userId = "";
                device.startDate = undefined;
                device.dueDate = undefined;
            } 
            
            device.state = getKeyByValue(state)
            console.log(device)
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
    }

    getDeviceState(device:Device):Device {
        let url = this.apiUrl + "all/getDevice" + "?deviceId=" + device.deviceId;
        this.http.get<Device>(url)
        .subscribe({
            next: response => {
              return response
            },
            error: error => {
              console.error(error);
              return NULL_DEVICE
            }
          });
          return NULL_DEVICE
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
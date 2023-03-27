import { Component, Input, OnInit } from '@angular/core';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { DevicestateEnum } from 'src/app/interface/devicestate.enum';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  
  @Input() device: Device= NULL_DEVICE;

  nulldevice = NULL_DEVICE;
  public DevicestateEnum = DevicestateEnum;
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  handleEvent(value: any){
    console.log(value);

  }

  getDeviceService(){
    return this.deviceService;
  }

  showStateButtons():boolean{
      return DevicestateEnum[this.device.state] == DevicestateEnum.REQUESTED;
  }

  changeDeviceState(device: Device, state:DevicestateEnum){
    this.deviceService.changeDeviceState(device, state).subscribe((success) => {
      if(success){
        
      }
    })
  }

  declineDevice(){

  }

  deleteDevice(device:Device){
    this.deviceService.deleteDevice(device).subscribe((success) => {
      if(success){
        
      }
    })
  }

}

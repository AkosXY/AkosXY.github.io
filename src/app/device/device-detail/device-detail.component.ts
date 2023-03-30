import { Component, Input, OnInit } from '@angular/core';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { DevicestateEnum } from 'src/app/interface/devicestate.enum';
import { DeviceService } from 'src/app/services/device.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  
  @Input() device: Device= NULL_DEVICE;

  nulldevice = NULL_DEVICE;
  public DevicestateEnum = DevicestateEnum;
  title = 'app';
  elementType = 'url';
  value = 'this is the value';

  constructor(private deviceService: DeviceService,private router: RoutingService) { }

  ngOnInit(): void {
  }

  handleEvent(value: any){
    console.log(value);

  }

  getDeviceService(){
    return this.deviceService;
  }
  
  getInventoryId(device:Device){
    return device.inventoryId ? device.inventoryId : "nem";
  }

  getQrVisible(){
    return this.device.inventoryId ? true : false;
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

  deleteDevice(device:Device){
    this.deviceService.deleteDevice(device).subscribe((success) => {
      if(success){
        this.ngOnInit();
        window.location.reload();
      }
    })
  }

}

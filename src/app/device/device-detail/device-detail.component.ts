import { Component, Input, OnInit } from '@angular/core';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.css']
})
export class DeviceDetailComponent implements OnInit {
  
  @Input() device: Device= NULL_DEVICE;

  nulldevice = NULL_DEVICE;
 
  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  handleEvent(value: any){
    console.log(value);

  }

  
  getDeviceService(){
    return this.deviceService;
  }
}

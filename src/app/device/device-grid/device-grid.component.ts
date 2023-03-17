import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interface/device.interface';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-grid',
  templateUrl: './device-grid.component.html',
  styleUrls: ['./device-grid.component.css']
})
export class DeviceGridComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }
  devices$ = this.deviceService.getDevices();

  mydevices: any[] = [];

  async ngOnInit(): Promise<void> {
     this.deviceService.getDevices().subscribe(device => {
         this.mydevices = device;
         console.log(device)
     })
  }


}

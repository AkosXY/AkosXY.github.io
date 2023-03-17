import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/interface/device.interface';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-grid',
  templateUrl: './device-grid.component.html',
  styleUrls: ['./device-grid.component.css']
})
export class DeviceGridComponent implements OnInit {

 /*  @Output() selectDevice = new EventEmitter<Device>(); */
  
 @Output() deviceSelected = new EventEmitter<Device>();
  mydevices: Device[] = [];


  constructor(private deviceService: DeviceService) { }
  //devices$ = this.deviceService.getDevices();


  async ngOnInit(): Promise<void> {
     this.deviceService.getDevices().subscribe(device => {
         this.mydevices = device;
         console.log(device)
     })
  }

  onDeviceSelected(device: Device) {
    console.log(device.name)
    this.deviceSelected.emit(device);
  }

/*   sendOutEvent(device:Device){
      this.selectDevice.emit(device)
  } */



}

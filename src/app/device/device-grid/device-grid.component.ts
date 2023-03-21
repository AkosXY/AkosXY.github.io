import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/interface/device.interface';
import { DevicestateEnum } from 'src/app/interface/devicestate.enum';
import { DeviceService } from 'src/app/services/device.service';
import { NgxSkeletonLoaderComponent } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-device-grid',
  templateUrl: './device-grid.component.html',
  styleUrls: ['./device-grid.component.css']
})
export class DeviceGridComponent implements OnInit {

 /*  @Output() selectDevice = new EventEmitter<Device>(); */
  
 @Output() deviceSelected = new EventEmitter<Device>();
  mydevices: Device[] = [];
  loading = true;
  totalCount = 10;

  constructor(private deviceService: DeviceService) { }


  async ngOnInit(): Promise<void> {
     this.deviceService.getDevices("/getAllDevices").subscribe(device => {
         this.mydevices = device;
         this.loading = false;
         console.log(device)
     })
  }

  onDeviceSelected(device: Device) {
    console.log(device)
    this.deviceSelected.emit(device);
  }

/*   sendOutEvent(device:Device){
      this.selectDevice.emit(device)
  } */
  testDevice:Device = {
    deviceId: 0,
    name: "DeviceName",
    inventoryId: "invId01",
    description: "device description",
    userId: "user01",
    providerId: "provider01",
    state: "FREE",
    startDate: new Date,
    dueDate: new Date

  }

  testDevices: Device[] = this.initDevices();

  initDevices(){
    let retDevice:Device[] = [];
    for(let i = 0; i < 10; i++)
      retDevice.push(this.testDevice)
    return retDevice;
  }

  getDeviceService(){
    return this.deviceService;
  }


}

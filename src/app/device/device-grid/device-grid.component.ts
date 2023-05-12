import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { DevicestateEnum } from 'src/app/interface/devicestate.enum';
import { RoutingService } from 'src/app/services/routing.service';
import { FormControl } from '@angular/forms';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-device-grid',
  templateUrl: './device-grid.component.html',
  styleUrls: ['./device-grid.component.css']
})
export class DeviceGridComponent implements OnInit {

  
  @Output() deviceSelected = new EventEmitter<Device>();
  mydevices: Device[] = [];
  loading = true;
  totalCount = 9;

  searchForm = new FormControl("");
  searchTerm = "";

  constructor(private deviceService: DeviceService, private routing: RoutingService) {}

  selectedDevice = NULL_DEVICE;


  async ngOnInit(): Promise<void> {
    this.loadDevices() 
  }

  onDeviceSelected(device: Device) {
    console.log(device)
    this.selectedDevice = device;
    this.deviceSelected.emit(device);
  }

  loadDevices(){
    this.loading = true;
    this.deviceService.getDevices(this.routing.getApi()).subscribe(device => {
      if(this.routing.getSelected() == "/pending"){
        device = device.filter(filtered =>
          DevicestateEnum[filtered.state] == DevicestateEnum.REQUESTED
        )
      }
      this.mydevices = device;
      this.loading = false;
    })

  }

  isDeviceSeleced(device:Device){
    if (device == this.selectedDevice){
      return true;
    } else{
      return false;
    }
  }

  getDeviceService(){
    return this.deviceService;
  }

  refresh(){
    console.log("refreshing")
    this.loadDevices() 
  }

  /* Test 
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
  */



}

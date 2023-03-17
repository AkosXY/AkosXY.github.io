import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interface/device.interface';

@Component({
  selector: 'app-mydevices',
  templateUrl: './mydevices.component.html',
  styleUrls: ['./mydevices.component.css']
})
export class MydevicesComponent implements OnInit {
  selectedDevice!: Device;

  constructor() { }

  ngOnInit(): void {
  }

  onDeviceSelected(device: Device) {
    console.log("selected:" + device.name)
    this.selectedDevice = device;
  }
}

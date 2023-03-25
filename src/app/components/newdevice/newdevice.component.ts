import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-newdevice',
  templateUrl: './newdevice.component.html',
  styleUrls: ['./newdevice.component.css', '../../device/device-detail/device-detail.component.css']
})
export class NewdeviceComponent implements OnInit {

  constructor(private deviceService: DeviceService) { }

  nameForm = new FormControl("",Validators.required);
  InventoryIdForm = new FormControl("",Validators.required);
  descriptionForm = new FormControl("",Validators.required);
  
  namePlaceholder = "név";
  InventoryIdPlaceholder = "leltárszám";
  descriptionPlaceholder = "leírás";

  //device:Device = NULL_DEVICE;

  deviceForm = new FormGroup({
    nameForm:this.nameForm,
    InventoryIdForm:this.InventoryIdForm,
    descriptionForm:this.descriptionForm
  })


  ngOnInit(): void {
  }

  submitDevice(){
    const device: Device = {
      name: this.nameForm.value ? this.nameForm.value.toString() : "",
      inventoryId: this.InventoryIdForm.value ? this.InventoryIdForm.value.toString() : "",
      description: this.descriptionForm.value ? this.descriptionForm.value.toString() : "",
      providerId: "notRealProvider",
      deviceId: undefined,
      userId: undefined,
      state: 'FREE',
      startDate: undefined,
      dueDate: undefined
    };

    this.deviceService.postDevice(device);
/*     this.device.name = this.nameForm.value? this.nameForm.value.toString():"";
    this.device.inventoryId = this.InventoryIdForm.value? this.InventoryIdForm.value.toString():"";
    this.device.description = this.descriptionForm.value? this.descriptionForm.value.toString():"";
    this.device.providerId = "notRealProvider";
    this.device.deviceId = null;
    console.log(this.device);
    this.deviceService.postDevice(this.device); */
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-newdevice',
  templateUrl: './newdevice.component.html',
  styleUrls: ['./newdevice.component.css', '../../device/device-detail/device-detail.component.css']
})
export class NewdeviceComponent implements OnInit {

  constructor(private deviceService: DeviceService, private authService :AuthenticationService) { }

  nameForm = new FormControl("",Validators.required);
  InventoryIdForm = new FormControl("");
  descriptionForm = new FormControl("");
  
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
      providerId: this.authService.getUserEmail(),
      deviceId: undefined,
      userId: undefined,
      state: 'FREE',
      startDate: undefined,
      dueDate: undefined
    };

    this.deviceService.postDevice(device).subscribe((success) => {
      if(success){
        this.deviceForm.reset();
      }
    });

  }

  getUserId(){
    return this.authService.getUserId();
  }

  getUserEmail(){
    return this.authService.getUserEmail();
  }

}

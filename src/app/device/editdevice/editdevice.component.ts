import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { updatePassword } from 'firebase/auth';
import { Device } from 'src/app/interface/device.interface';
import { DeviceService } from 'src/app/services/device.service';

@Component({
  selector: 'app-editdevice',
  templateUrl: './editdevice.component.html',
  styleUrls: ['./editdevice.component.css']
})
export class EditdeviceComponent {

  @Input()
  device!: Device;
  deviceForm!: FormGroup;

  @Output() deviceUpdated: EventEmitter<Device> = new EventEmitter<Device>();

  constructor(private deviceService: DeviceService) { 
  }

  ngOnInit() {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['device'] && this.device) {
      this.updateFormValues();
    }
  }

  private updateFormValues() {
    if (this.deviceForm) {
      this.deviceForm.patchValue({
        nameForm: this.device.name,
        InventoryIdForm: this.device.inventoryId,
        descriptionForm: this.device.description
      });
    }
  }

  private initializeForm() {
    this.deviceForm = new FormGroup({
      nameForm: new FormControl(this.device.name, Validators.required),
      InventoryIdForm: new FormControl(this.device.inventoryId),
      descriptionForm: new FormControl(this.device.description)
    });
  }

  updateDevice() {

    let updatedDevice = this.device;
    updatedDevice.name = this.deviceForm.get('nameForm')?.value;
    updatedDevice.inventoryId = this.deviceForm.get('InventoryIdForm')?.value
    updatedDevice.description =  this.deviceForm.get('descriptionForm')?.value;
    
    this.deviceUpdated.emit(updatedDevice);
    this.deviceService.updateDevice(updatedDevice).subscribe((success) => {
      if(success){
      }
    }); 
  }

  saveChanges(){
    console.log(this.device)

  }
}

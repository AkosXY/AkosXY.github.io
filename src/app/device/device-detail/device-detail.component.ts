import { Component, Input, OnInit  } from '@angular/core';
import { Device, NULL_DEVICE } from 'src/app/interface/device.interface';
import { DevicestateEnum, getKeyByValue } from 'src/app/interface/devicestate.enum';
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
  
  getDeviceId(device:Device){
    return device.deviceId;
  }


  isDisabled(){
    return DevicestateEnum[this.device.state] == DevicestateEnum.FREE || DevicestateEnum[this.device.state] == DevicestateEnum.IN_USE
  }

  changeDeviceState(device: Device, state:DevicestateEnum){
    this.deviceService.changeDeviceState(device, state).subscribe((success) => {
      if(success){
        
      }
    })
  }

  approveDeviceState(device: Device){
    let nextState = DevicestateEnum[device.state];
    if(device.state == getKeyByValue(DevicestateEnum.REQUESTED)){
      nextState = DevicestateEnum.IN_USE;
    } else if (device.state == getKeyByValue(DevicestateEnum.RETURNED)){
      nextState = DevicestateEnum.FREE;
    }

    this.deviceService.changeDeviceState(device, nextState).subscribe((success) => {
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

  async downloadQRCode(name:string) {
    const fileName = name + '_qrcode.png';
    const qrcodeImg = document.querySelector('.qrcode img') as HTMLImageElement;
    const blob = await this.fetchImage(qrcodeImg.src);
    this.downloadImage(blob, fileName);
  }
  
  async fetchImage(url: string): Promise<Blob> {
    const response = await fetch(url);
    const blob = await response.blob();
    return blob;
  }
  
  downloadImage(blob: Blob, fileName: string) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
  
  
}

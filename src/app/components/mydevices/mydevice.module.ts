import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MydevicesComponent } from './mydevices.component';
import { DeviceDetailComponent } from 'src/app/device/device-detail/device-detail.component';
import { DeviceGridComponent } from 'src/app/device/device-grid/device-grid.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { DeviceFilterPipe } from 'src/app/interface/device-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DeviceService } from 'src/app/services/device.service';
import { RoutingService } from 'src/app/services/routing.service';
import { NoDataComponent } from '../no-data/no-data.component';


const routes: Routes = [
  {
    path: '',
    component: MydevicesComponent
  }
];

@NgModule({
    declarations:[
        DeviceGridComponent,
        DeviceDetailComponent,
        MydevicesComponent,
        DeviceFilterPipe,
        NoDataComponent
    ],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NgxQRCodeModule,
        NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...'}),
        RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [AuthenticationService, DeviceService, RoutingService]
})
export class DeviceModule { }
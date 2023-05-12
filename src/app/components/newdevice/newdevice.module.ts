import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NewdeviceComponent } from './newdevice.component';


const routes: Routes = [
  {
    path: '',
    component: NewdeviceComponent
  }
];

@NgModule({
    declarations:[      
        NewdeviceComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NewDeviceModule { }
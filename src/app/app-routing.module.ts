import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

    {path:'login', loadChildren: () => import("./components/login/login.module").then(m => m.LoginModule)},
    {path:'mydevices', loadChildren: () => import("./components/mydevices/mydevice.module").then(m => m.DeviceModule)},
    {path:'pending', loadChildren: () => import("./components/mydevices/mydevice.module").then(m => m.DeviceModule)},
    {path:'newdevice', loadChildren: () => import("./components/newdevice/newdevice.module").then(m => m.NewDeviceModule)},
    {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }

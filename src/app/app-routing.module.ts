import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MydevicesComponent } from './components/mydevices/mydevices.component';
import { NewdeviceComponent } from './components/newdevice/newdevice.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'mydevices', component:MydevicesComponent},
    {path:'pending', component:MydevicesComponent},
    {path:'newdevice', component:NewdeviceComponent},
    {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }

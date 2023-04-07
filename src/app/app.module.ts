import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';



import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';

import { HomeComponent } from './components/home/home.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AuthenticationService} from "./services/authentication.service";
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PendingComponent } from './components/pending/pending.component';
import { MydevicesComponent } from './components/mydevices/mydevices.component';
import { NewdeviceComponent } from './components/newdevice/newdevice.component';
import { DeviceGridComponent } from './device/device-grid/device-grid.component';
import { DeviceDetailComponent } from './device/device-detail/device-detail.component';
import { HttpClientModule  } from '@angular/common/http';
import { NoDataComponent } from './components/no-data/no-data.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatCommonModule, MatDividerModule } from '@angular/material';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DeviceFilterPipe } from './interface/device-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent,
    PendingComponent,
    MydevicesComponent,
    NewdeviceComponent,
    DeviceGridComponent,
    DeviceDetailComponent,
    NoDataComponent,
    DeviceFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    NgxQRCodeModule,
    Ng2SearchPipeModule,
    FormsModule,
      
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse', loadingText: 'This item is actually loading...'}),
    //provideFirebaseApp(() => initializeApp(environment.firebase)),
    //provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

import { HomeComponent } from './components/home/home.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AuthenticationService} from "./services/authentication.service";
import { NavComponent } from './components/nav/nav.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule  } from '@angular/common/http';
import { MatDividerModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RoutingService } from './services/routing.service';
import { DeviceService } from './services/device.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SidebarComponent
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

    Ng2SearchPipeModule,
    FormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthenticationService, DeviceService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

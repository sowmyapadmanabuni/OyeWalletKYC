import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule }   from '@angular/forms';
import { StoreListComponent } from './store-list/store-list.component';
import { HttpClientModule } from '@angular/common/http';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {DataTableModule} from "angular-6-datatable";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { LightboxModule } from 'ngx-lightbox';
import { SearchPipe } from "./utils/search.pipe";
import { InputModalComponent } from './input-modal/input-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StoreListComponent,
    CountDownTimerComponent,
    StoreDetailsComponent,
    SearchPipe,
    InputModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2TelInputModule,
    NgxPaginationModule,
    DataTableModule,
    BrowserAnimationsModule,    
    AccordionModule.forRoot(),
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

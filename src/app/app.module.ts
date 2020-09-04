import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SleepmyboyComponent } from './sleepmyboy/sleepmyboy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SleepyRoles } from './services/sleepyroles.service';
import {FormsModule}   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SleepmyboyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SleepyRoles],
  bootstrap: [AppComponent]
})
export class AppModule { }

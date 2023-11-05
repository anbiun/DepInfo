import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { EncComponent } from './enc-component/enc.component';
import { DecComponent } from './dec-component/dec.component';

import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DockModule } from 'primeng/dock';

@NgModule({
  declarations: [
    AppComponent,
    EncComponent,
    DecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    BrowserAnimationsModule,
    DockModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

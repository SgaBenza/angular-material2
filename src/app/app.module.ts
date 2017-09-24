import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ShadowComponent } from './shadow/shadow.component';

@NgModule({
  declarations: [
    AppComponent,
    ShadowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

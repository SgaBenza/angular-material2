import { PostsService } from './services/posts.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdInputModule, MatListModule, MatButtonModule, MatIconModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ShadowComponent } from './shadow/shadow.component';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ShadowComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatIconModule,
    MdInputModule,
    MatButtonModule,
    MatListModule,
    RouterModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

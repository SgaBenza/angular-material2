import { ArrayForm } from './form/array.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from './services/posts.service';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShadowComponent } from './shadow/shadow.component';
import { PostsComponent } from './posts/posts.component';
import { ValidazioniComponent } from './validation/validazioni.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { SassComponent } from './sass/sass.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubFollowersService } from './services/github-followers.service';



@NgModule({
  declarations: [
    AppComponent,
    ArrayForm,
    PostsComponent,
    ShadowComponent,
    ValidazioniComponent,
    SassComponent,
    GithubFollowersComponent

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [
    GithubFollowersService,
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

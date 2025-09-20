import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Componentshome } from './components/componentshome/componentshome';
import { SinglePost } from './components/single-post/single-post';
import { EditPost } from './components/edit-post/edit-post';
import { FormsModule } from '@angular/forms'; 
@NgModule({
  declarations: [
    App,
    Componentshome,
    SinglePost,
    EditPost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
/*
const appRoutes: Routes=[
  {path:''}
]*/




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
    //RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

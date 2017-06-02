import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {RouterModule, Routes} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { UserBoxComponent } from './home/user-box/user-box.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

import { UserService } from './services/user/user.service';
import { MessageService } from './services/messages/message.service'

const appRoutes: Routes=[
  {path:'', redirectTo: 'auth/login', pathMatch: 'full'},

  { path:'auth', component: AuthComponent, children:[
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    {path:'', redirectTo:'auth/login', pathMatch:'full'}
  ]},

  { path:'chat', component: ChatRoomComponent },
  { path:'home', component: HomeComponent }
]




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AuthComponent,
    HomeComponent,
    UserBoxComponent,
    ChatRoomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [UserService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SpecialisteComponent } from './specialiste/specialiste.component';
import { NewSpecialisteComponent } from './new-specialiste/new-specialiste.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';  //A verifier
import { HttpClientModule } from "@angular/common/http";
//import { HttpModule } from "@angular/http";
//import { RouterModule } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


const appRoutes:Routes=[
  {path:"login", component:LoginComponent},
  {path:"specialistes", component:SpecialisteComponent},
  {path:"new-specialiste", component:NewSpecialisteComponent},
  {path:"register", component:RegisterComponent},
  {path:"", redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SpecialisteComponent,
    NewSpecialisteComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    HttpClientModule, 
    FormsModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

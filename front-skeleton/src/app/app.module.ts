import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { StatusesComponent } from "statuses/statuses.component"
import {StatusStudentsComponent} from "./statuses/status-students/status-students.component";
import { HttpClientModule } from "@angular/common/http"
import {TestComponent} from "./test/test.component";
import {AboutComponent} from "./about/about.component";
import {FormationComponent} from "./formation/formation.component";
import {PriceComponent} from "./price/price.component";
import {ContactComponent} from "./contact/contact.component";
import {SigninComponent} from "./signin/signin.component";
import {botbarComponent} from "./botbar/botbar.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
  declarations: [
    TestComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StatusesComponent,
    StatusStudentsComponent,
    AboutComponent,
    FormationComponent,
    PriceComponent,
    ContactComponent,
    SigninComponent,
    botbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}

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
import {LoginComponent} from "./login/login.component";
import {SelectionComponent} from "./Selection/selection";
import {SelectioninterComponent} from "./selectioninter/selectioninter.component";
import {SelectionexpertComponent} from "./selectionexpert/selectionexpert.component";
import {SelectioninitComponent} from "./selectioninit/selectioninit.component";
import {Formationinter1Component} from "./formationinter1/formationinter1.component";
import {Formationinter2Component} from "./formationinter2/formationinter2.component";
import {Formationinter3Component} from "./formationinter3/formationinter3.component";
import {Formationexpert1Component} from "./formationexpert1/formationexpert1.component";
import {Formationexpert3Component} from "./formationexpert3/formationexpert3.component";
import {Formationexpert2Component} from "./formationexpert2/formationexpert2.component";
import {Formationinit1Component} from "./formationinit1/formationinit1.component";
import {Formationinit2Component} from "./formationinit2/formationinit2.component";
import {Formationinit3Component} from "./formationinit3/formationinit3.component";
import {ReglementexpertComponent} from "./reglementexpert/reglementexpert.component";
import {ReglementinitComponent} from "./reglementinit/reglementinit.component";
import {ReglementinterComponent} from "./reglementinter/reglementinter.component";
import {StudentDetails2Component} from "./students/student-details/student-details2.component";


@NgModule({
  declarations: [
    TestComponent,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SelectionComponent,
    StudentsComponent,
    StudentDetailsComponent,
    StatusesComponent,
    StatusStudentsComponent,
    AboutComponent,
    FormationComponent,
    PriceComponent,
    ContactComponent,
    SigninComponent,
    LoginComponent,
    SelectioninterComponent,
    SelectionexpertComponent,
    SelectioninitComponent,
    Formationinter1Component,
    Formationinter2Component,
    Formationinter3Component,
    Formationexpert1Component,
    Formationexpert2Component,
    Formationexpert3Component,
    Formationinit1Component,
    Formationinit2Component,
    Formationinit3Component,
    ReglementexpertComponent,
    ReglementinitComponent,
    ReglementinterComponent,
    StudentDetails2Component

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

import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentsResolver } from "students/students.resolver"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { StudentDetailsResolver } from "students/student-details/student-details.resolver"
import { StatusesComponent } from "statuses/statuses.component"
import { StatusesResolver } from "statuses/statuses.resolver"
import {StatusStudentsResolver} from "./statuses/status-students/status-students.resolver";
import {StatusStudentsComponent} from "./statuses/status-students/status-students.component";
import {TestComponent} from "./test/test.component";
import {AboutComponent} from "./about/about.component";
import {FormationComponent} from "./formation/formation.component";
import {PriceComponent} from "./price/price.component";
import {ContactComponent} from "./contact/contact.component";
import {SigninComponent} from "./signin/signin.component";
import {LoginComponent} from "./login/login.component";
import {Formationinter1Component} from "./formationinter1/formationinter1.component";
import {Formationinter2Component} from "./formationinter2/formationinter2.component";
import {Formationinter3Component} from "./formationinter3/formationinter3.component";
import {Formationinit1Component} from "./formationinit1/formationinit1.component";
import {Formationinit2Component} from "./formationinit2/formationinit2.component";
import {Formationinit3Component} from "./formationinit3/formationinit3.component";
import {Formationexpert1Component} from "./formationexpert1/formationexpert1.component";
import {Formationexpert2Component} from "./formationexpert2/formationexpert2.component";
import {Formationexpert3Component} from "./formationexpert3/formationexpert3.component";
import {SelectioninitComponent} from "./selectioninit/selectioninit.component";
import {SelectioninterComponent} from "./selectioninter/selectioninter.component";
import {SelectionexpertComponent} from "./selectionexpert/selectionexpert.component";
import {ReglementinitComponent} from "./reglementinit/reglementinit.component";
import {ReglementinterComponent} from "./reglementinter/reglementinter.component";
import {ReglementexpertComponent} from "./reglementexpert/reglementexpert.component";
import {SelectionComponent} from "./Selection/selection";
import {StudentDetails2Component} from "./students/student-details/student-details2.component";
import {StudentDetails2Resolver} from "./students/student-details/student-details2.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "etudiants",
    component: StudentsComponent,
    resolve: {
      students: StudentsResolver,
    },
  },{
    path: "tester",
    component: TestComponent,
  },
  {path: "connexion",
  component: LoginComponent,},

  {
    path: "prix",
    component: PriceComponent,
  },
  {
    path: "cont",
    component: ContactComponent,
  },
  {path: "signin",
  component: SigninComponent},

  {
    path: "formations",
    component: FormationComponent,
  },
  {
    path: "details-etudiant/:id",
    component: StudentDetailsComponent,
    resolve: {
      student: StudentDetailsResolver,
    },
  },
  {
    path: "details-etudiant2/:id",
    component: StudentDetails2Component,
    resolve: {
      student: StudentDetails2Resolver,
    },
  },

  {
    path: "selection",
    component: SelectionComponent,

  },
  {
    path: "status-etudiants/:id",
    component: StatusStudentsComponent,
    resolve: {
      studentsFromMajor: StatusStudentsResolver,
    },
  },

  {
    path: "formationinter1",
    component: Formationinter1Component,
  },
  {
    path: "formationinter2",
    component: Formationinter2Component,
  },
  {
    path: "formationinter3",
    component: Formationinter3Component,
  },
  {
    path: "formationinit1",
    component: Formationinit1Component,
  },

  {
    path: "formationinit2",
    component: Formationinit2Component,
  },

  {
    path: "formationinit3",
    component: Formationinit3Component,
  },

  {
    path: "formationexpert1",
    component: Formationexpert1Component,
  },

  {
    path: "formationexpert2",
    component: Formationexpert2Component,
  },

  {
    path: "formationexpert3",
    component: Formationexpert3Component,
  },

  {
    path: "selectioninit",
    component: SelectioninitComponent,
  },
  {
    path: "selectioninter",
    component: SelectioninterComponent,
  },
  {
    path: "selectionexpert",
    component: SelectionexpertComponent,
  },

  {
    path: "reglementinit",
    component: ReglementinitComponent,
  },

  {
    path: "reglementinter",
    component: ReglementinterComponent,
  },

  {
    path: "reglementexpert",
    component: ReglementexpertComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

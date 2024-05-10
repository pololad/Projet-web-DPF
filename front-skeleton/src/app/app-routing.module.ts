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

  {
    path: "apropos",
    component: AboutComponent,
  },
  {
    path: "prix",
    component: PriceComponent,
  },
  {
    path: "cont",
    component: ContactComponent,
  },
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
    path: "statuses",
    component: StatusesComponent,
    resolve: {
      majors: StatusesResolver,
    },
  },
  {
    path: "status-etudiants/:id",
    component: StatusStudentsComponent,
    resolve: {
      studentsFromMajor: StatusStudentsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

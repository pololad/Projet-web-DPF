import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import { StudentsComponent } from "students/students.component"
import { StudentsResolver } from "students/students.resolver"
import { StudentDetailsComponent } from "students/student-details/student-details.component"
import { StudentDetailsResolver } from "students/student-details/student-details.resolver"
import { MajorsComponent } from "majors/majors.component"
import { MajorsResolver } from "majors/majors.resolver"
import { MajorStudentsResolver } from "majors/major-students/major-students.resolver"
import { MajorStudentsComponent } from "majors/major-students/major-students.component"
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
    path: "filieres",
    component: MajorsComponent,
    resolve: {
      majors: MajorsResolver,
    },
  },
  {
    path: "etudiants-filiere/:id",
    component: MajorStudentsComponent,
    resolve: {
      studentsFromMajor: MajorStudentsResolver,
    },
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

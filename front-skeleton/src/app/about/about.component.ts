import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/student.model"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "services/student.service"
import {Link} from "../models/links.model";

@Component({
  selector: "students",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {
  links: Link[] = []
  constructor() {
    this.links.push({name:"Test", href: "tester"})

  }
}

import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/student.model"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "services/student.service"
import {Link} from "../models/links.model";
@Component({
  selector: "botbar",
  templateUrl: "./botbar.component.html",
  styleUrls: ["./botbar.component.scss"],
})
export class botbarComponent {
  links: Link[] = []


  constructor() {




  }
}

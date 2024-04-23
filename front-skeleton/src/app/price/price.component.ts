import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/student.model"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "services/student.service"
import {Link} from "../models/links.model";

@Component({
  selector: "prices",
  templateUrl: "./price.component.html",
  styleUrls: ["./price.component.scss"],
})
export class PriceComponent {
  links: Link[] = []
  constructor() {


  }
}

import {Component, OnInit} from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/student.model"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "services/student.service"
import {Link} from "../models/links.model";
@Component({
  selector: "test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  links: Link[] = []


  constructor() {
    this.links.push({ name: "Étudiants", href: "/etudiants" })


  }

  ngOnInit(): void {}
}

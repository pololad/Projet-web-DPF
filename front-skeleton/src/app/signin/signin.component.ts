import { Component } from "@angular/core"
import { Link } from "models/links.model"
import {Student} from "../models/student.model";

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent {
  links: Link[] = []
  client : Student[]=[]
  constructor() {


  }
}


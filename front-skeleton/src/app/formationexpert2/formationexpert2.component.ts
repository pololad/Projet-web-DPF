import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationexper2",
  templateUrl: "./formationexpert2.component.html",
  styleUrls: ["./formationexpert2.component.scss"],
})
export class Formationexpert2Component {
  links: Link[] = []
  constructor() {


  }
}

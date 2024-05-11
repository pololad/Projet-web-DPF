import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationinit2",
  templateUrl: "./formationinit2.component.html",
  styleUrls: ["./formationinit2.component.scss"],
})
export class Formationinit2Component {
  links: Link[] = []
  constructor() {


  }
}

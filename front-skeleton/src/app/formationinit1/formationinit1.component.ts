import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationinit1",
  templateUrl: "./formationinit1.component.html",
  styleUrls: ["./formationinit1.component.scss"],
})
export class Formationinit1Component {
  links: Link[] = []
  constructor() {


  }
}

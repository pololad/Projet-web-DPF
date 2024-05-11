import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationinit3",
  templateUrl: "./formationinit3.component.html",
  styleUrls: ["./formationinit3.component.scss"],
})
export class Formationinit3Component {
  links: Link[] = []
  constructor() {


  }
}

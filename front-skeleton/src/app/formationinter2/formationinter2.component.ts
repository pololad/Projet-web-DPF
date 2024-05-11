import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationinter2",
  templateUrl: "./formationinter2.component.html",
  styleUrls: ["./formationinter2.component.scss"],
})
export class Formationinter2Component {
  links: Link[] = []
  constructor() {


  }
}

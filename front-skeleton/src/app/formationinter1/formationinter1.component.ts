import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationinter1",
  templateUrl: "./formationinter1.component.html",
  styleUrls: ["./formationinter1.component.scss"],
})
export class Formationinter1Component {
  links: Link[] = []
  constructor() {


  }
}

import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "formationexper1",
  templateUrl: "./formationexpert1.component.html",
  styleUrls: ["./formationexpert1.component.scss"],
})
export class Formationexpert1Component {
  links: Link[] = []
  constructor() {


  }
}

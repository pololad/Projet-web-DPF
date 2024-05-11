import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "reglementinter",
  templateUrl: "./reglementinter.component.html",
  styleUrls: ["./reglementinter.component.scss"],
})
export class ReglementinterComponent {
  links: Link[] = []
  constructor() {


  }
}

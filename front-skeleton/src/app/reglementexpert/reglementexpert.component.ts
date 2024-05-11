import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "reglementexpert",
  templateUrl: "./reglementexpert.component.html",
  styleUrls: ["./reglementexpert.component.scss"],
})
export class ReglementexpertComponent {
  links: Link[] = []
  constructor() {


  }
}

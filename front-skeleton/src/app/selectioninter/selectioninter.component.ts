import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "selectioninter",
  templateUrl: "./selectioninter.component.html",
  styleUrls: ["./selectioninter.component.scss"],
})
export class SelectioninterComponent {
  links: Link[] = []
  constructor() {


  }
}

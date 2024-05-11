import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "selectionexpert",
  templateUrl: "./selectionexpert.component.html",
  styleUrls: ["./selectionexpert.component.scss"],
})
export class SelectionexpertComponent {
  links: Link[] = []
  constructor() {


  }
}

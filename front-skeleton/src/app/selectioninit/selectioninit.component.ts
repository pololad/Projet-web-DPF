import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "selectioninit",
  templateUrl: "./selectioninit.component.html",
  styleUrls: ["./selectioninit.component.scss"],
})
export class SelectioninitComponent {
  links: Link[] = []
  constructor() {


  }
}

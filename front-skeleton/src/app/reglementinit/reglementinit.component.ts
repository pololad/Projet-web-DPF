import { Component } from "@angular/core"

import {Link} from "../models/links.model";

@Component({
  selector: "reglementinit",
  templateUrl: "./reglementinit.component.html",
  styleUrls: ["./reglementinit.component.scss"],
})
export class ReglementinitComponent {
  links: Link[] = []
  constructor() {


  }
}

import { Component } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []

  constructor() {

    this.links.push({name:"Home", href: ""})
    this.links.push({ name: "Client", href: "etudiants" })
    this.links.push({name:"Cours", href: "tester"})
    this.links.push({name:"Tarifs", href: "prix"})
    this.links.push({name:"Mail", href: "cont"})
    this.links.push({name:"Status",href:"statuses"})
  }
}


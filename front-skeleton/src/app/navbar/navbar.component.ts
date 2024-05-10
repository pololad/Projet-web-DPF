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
    this.links.push({ name: "Étudiants", href: "etudiants" })

    this.links.push({name:"home", href: ""})
    this.links.push({name:"A propos", href: "apropos"})
    this.links.push({name:"Formation", href: "formations"})
    this.links.push({name:"Prix", href: "prix"})
    this.links.push({name:"Contacter", href: "cont"})
    this.links.push({name:"status",href:"statuses"})
  }
}


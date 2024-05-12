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

    this.links.push({name:"Cours", href: "formations"})
    this.links.push({name:"Tarifs", href: "prix"})
    this.links.push({name:"Contact", href: "cont"})
    this.links.push({name:"Sign", href: "/details-etudiant/new" })
    this.links.push({name:"Login",href:"connexion"})

  }
}


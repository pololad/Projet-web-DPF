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
    this.links.push({name:"Home", href: "home"})
    this.links.push({ name: "Etudiant", href: "etudiants" })
    this.links.push({ name: "Filières", href: "filieres" })
    this.links.push({name:"Test", href: "tester"})
    this.links.push({name:"Formation", href: "formations"})
    this.links.push({name:"Prix", href: "prix"})
    this.links.push({name:"Contacter", href: "cont"})
  }
}


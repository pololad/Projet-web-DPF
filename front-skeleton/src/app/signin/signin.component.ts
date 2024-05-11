import { Component } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent {
  links: Link[] = []

  constructor() {

    this.links.push({name:"Home", href: ""})
    this.links.push({ name: "Client", href: "etudiants" })
    this.links.push({name:"Cours", href: "tester"})
    this.links.push({name:"Tarifs", href: "prix"})
    this.links.push({name:"Mails", href: "cont"})
    this.links.push({name:"Status",href:"statuses"})
  }
}


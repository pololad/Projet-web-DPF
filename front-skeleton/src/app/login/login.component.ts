import { Component } from "@angular/core"
import { Router } from "@angular/router"
import { Student } from "models/student.model"
import { StudentService } from "services/student.service"

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  username: string = ""
  password: string = ""
  client: Student | null = null
  loginSuccess: boolean = true // Variable pour suivre l'état de la connexion

  constructor(private studentService: StudentService, private router: Router) {}

  authenticate(): void {
    this.studentService.authenticate(this.username, this.password).subscribe((student) => {
      if (student) {
        this.client = student
        this.loginSuccess = true // Connexion réussie
        // Rediriger vers une autre page après l'authentification réussie
        this.router.navigate(["/dashboard"])
      } else {
        this.loginSuccess = false // Connexion échouée
      }
    })
  }
}

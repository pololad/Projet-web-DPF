import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "models/student.model";
import { StudentService } from "services/student.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  client: Student | null | undefined;
  loginSuccess: boolean = false;

  constructor(private router: Router, private studentService: StudentService) {}

  authenticate(): void {
    this.studentService.findAll().subscribe(students => {
      // Recherchez l'étudiant avec le username correspondant
      this.client = students.find(student => student.firstName === this.username);

      if (this.client && this.client.password === this.password) {
        // Authentification réussie
        this.loginSuccess = true;
        // Rediriger l'utilisateur vers une autre page après connexion réussie
        this.router.navigate(["/"]);
      } else {
        // Authentification échouée
        this.loginSuccess = false;
        alert("Nom d'utilisateur ou mot de passe incorrect.");
      }
    });
  }
}

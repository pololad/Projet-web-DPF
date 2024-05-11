// login.component.ts

import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Student } from "../models/student.model";
import { StudentService } from "../services/student.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  loginSuccess: boolean = false;

  constructor(private router: Router, private studentService: StudentService) {}

  authenticate(): void {
    this.studentService.findAll().subscribe(students => {
      const client = students.find(student => student.firstName === this.username);

      if (client && client.password === this.password) {
        // Authentification réussie, transmettre les informations du client comme paramètres de route
        this.router.navigate(['/'], { state: { client } });
      } else {
        this.loginSuccess = false;
        alert("Nom d'utilisateur ou mot de passe incorrect.");
      }
    });
  }

  isValidForm(): boolean {
    return this.username.trim().length > 0 && this.password.trim().length > 0;
  }
}

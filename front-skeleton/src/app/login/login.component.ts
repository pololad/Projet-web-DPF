// login.component.ts
import {OnInit} from "@angular/core";
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

  client: Student|undefined;
  loginSuccess: boolean = false;

  constructor(private router: Router, private studentService: StudentService) {}

  authenticate(): void {
    this.studentService.findAll().subscribe(students => {
      const client = students.find(student => student.lastName === this.username);

      if (client && client.password === this.password) {

        this.studentService.setCurrentStudent(client);
        this.router.navigate(['/formations'], { state: { client } });

      } else {
        this.loginSuccess = false;
        alert("Nom d'utilisateur ou mot de passe incorrect.");
      }
    });
  }

}

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
  client: Student | null = null;
  loginSuccess: boolean = true;

  constructor(
    private router: Router,
    private studentService: StudentService
  ) {}

  authenticate(): void {
    this.studentService.authenticate(this.username, this.password).subscribe(
      (student: Student) => {
        this.client = student;
        this.loginSuccess = true;
        this.router.navigate(["/dashboard"]);
      },
      (error) => {
        console.error("Authentication failed:", error);
        this.loginSuccess = false;
      }
    );
  }
}

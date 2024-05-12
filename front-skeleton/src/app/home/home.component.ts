// home.component.ts
import {StudentService} from "../services/student.service";
import { Component, OnInit } from "@angular/core";
import { Student } from "../models/student.model";
import { Router, ActivatedRoute } from "@angular/router";
import { map,Observable } from "rxjs";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  currentStudent$!: Observable<Student | null| undefined> ;
  constructor(private router: Router, private route: ActivatedRoute,private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.currentStudent$ = this.studentService.getCurrentStudent();

  }
}

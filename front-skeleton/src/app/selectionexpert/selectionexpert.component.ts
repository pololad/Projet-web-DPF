import { Component } from "@angular/core"

import {Observable} from "rxjs";
import {Student} from "../models/student.model";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../services/student.service";

@Component({
  selector: "selectionexpert",
  templateUrl: "./selectionexpert.component.html",
  styleUrls: ["./selectionexpert.component.scss"],
})
export class SelectionexpertComponent {
  currentStudent$!: Observable<Student | null| undefined> ;
  constructor(private router: Router, private route: ActivatedRoute,private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.currentStudent$ = this.studentService.getCurrentStudent();

  }
}

import { Component, OnInit } from "@angular/core"
import { map, Observable } from "rxjs"
import { ActivatedRoute } from "@angular/router"
import { Student } from "../../models/student.model"

@Component({
  selector: "status-students",
  templateUrl: "./status-students.component.html",
  styleUrls: ["./status-students.component.scss"],
})
export class StatusStudentsComponent implements OnInit {
  studentsFromStatus$: Observable<Student[]> = this._route.data.pipe(map((data) => data["studentsFromStatus"]))

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {}
}

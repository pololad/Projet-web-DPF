import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Status } from "models/status.model"
import { HttpClient } from "@angular/common/http"
import { Student } from "../models/student.model"

@Injectable({
  providedIn: "root",
})
export class StatusService {
  constructor(private http: HttpClient) {}

  private statusUrl = "http://localhost:8080/statuses"

  findAll(): Observable<Status[]> {
    return this.http.get<Status[]>(this.statusUrl)
  }

  findStudentsFromStatus(statusId: string): Observable<Student[]> {
    return this.http.get<Student[]>(this.statusUrl + `/${statusId}/students`)
  }
}

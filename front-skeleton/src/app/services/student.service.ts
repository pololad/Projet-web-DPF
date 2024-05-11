import { Injectable } from "@angular/core"
import { Student } from "models/student.model"
import { Offer } from "models/offer.model"
import { HttpClient } from "@angular/common/http"
import { Observable, BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private studentsUrl = "http://localhost:8080/students"
  private currentStudentSubject: BehaviorSubject<Student | null> = new BehaviorSubject<Student | null>(null);

  findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl)
  }

  findById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.studentsUrl}/${id}`)
  }

  update(id: number, student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.studentsUrl}/${id}`, student)
  }

  create(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentsUrl, student)
  }

  delete(student: Student) {
    return this.http.delete(`${this.studentsUrl}/${student.id}`)
  }

  addOfferToStudent(student: Student, offer: Offer) {
    if (student.offers == undefined) {
      student.offers = [offer]
    } else {
      student.offers.push(offer)
    }
    return student
  }

  removeOfferToStudent(student: Student, offer: Offer) {
    const index = student.offers?.indexOf(offer)
    if (index!! > -1) {
      student.offers?.splice(index!!, 1)
    }
    return student
  }




}

import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/student.model"
import { ActivatedRoute, Router } from "@angular/router"
import {Offer } from "models/offer.model"
import { OfferService } from "services/offer.service"
import { StudentService } from "services/student.service"
import { StatusService } from "../../services/status.service"
import {Status} from "../../models/status.model";

@Component({
  selector: "student-details",
  templateUrl: "./student-details.component.html",
  styleUrls: ["./student-details.component.scss"],
})
export class StudentDetailsComponent {
  student$: Observable<Student> = this._route.data.pipe(map((data) => data["student"]))
  allStatuses$: Observable<Status[]> | undefined
  allOffers$: Observable<Offer[]> | undefined
  statusSelectModel: Status | null = null
  offerSelectModel: Offer | null = null
  notSelectedOffer: boolean | undefined
  today = new Date(Date.now())

  constructor(
    private _route: ActivatedRoute,
    private offerService: OfferService,
    private studentService: StudentService,
    private statusService: StatusService,
    private router: Router,
  ) {
    this.allStatuses$ = this.statusService.findAll()
  }

  offerClick() {
    this.allOffers$ = this.offerService.findAll()
  }

  addOfferToStudent(student: Student) {
    if (this.offerSelectModel != null) {
      this.studentService.addOfferToStudent(student, this.offerSelectModel)
    } else {
      this.notSelectedOffer = true
    }
  }

  removeOfferToStudent(student: Student, offer: Offer) {
    this.studentService.removeOfferToStudent(student, offer)
  }

  save(student: Student) {
    const id = this._route.snapshot.params["id"]

    if (this.statusSelectModel !== null) {
      student.status = this.statusSelectModel
    }

    if (id == "new") {
      this.studentService.create(student).subscribe(() => {
        this.router.navigate(["etudiants"])
      })
    } else {
      this.studentService.update(id, student).subscribe(() => {
        this.router.navigate(["etudiants"])
      })
    }
  }

  // because the format of the date doesn't fit date picker
  updateBirthdate($event: any, student: Student) {
    student.birthdate = new Date($event)
  }
}

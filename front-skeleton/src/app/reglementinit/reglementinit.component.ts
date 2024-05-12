import { Component, OnInit } from "@angular/core";
import { StudentService } from "../services/student.service";
import { Student } from "../models/student.model";
import { Observable,Subscription } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { Offer } from "../models/offer.model";
import { map } from "rxjs/operators";

@Component({
  selector: "reglementinit",
  templateUrl: "./reglementinit.component.html",
  styleUrls: ["./reglementinit.component.scss"],
})
export class ReglementinitComponent implements OnInit {
  expertOffer: Offer = {
    difficulty: "initié",
    begin_date: new Date(),
    ending_date: new Date(),
  };
  private currentClientSubscription: Subscription | undefined;
  currentClient$!: Observable<Student | null | undefined>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.currentClient$ = this.studentService.getCurrentStudent().pipe(
      map((client) => {

        return client as Student;    })
    );


    this.currentClient$.subscribe((student) => {
      if (student) {
        this.studentService.addOfferToStudent(student, this.expertOffer);
      }
    });
  }
}

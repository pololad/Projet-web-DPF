import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Status } from "models/status.model"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "statuses",
  templateUrl: "./statuses.component.html",
  styleUrls: ["./statuses.component.scss"],
})
export class StatusesComponent {
  statuses$: Observable<Status[]> = this._route.data.pipe(map((data) => data["statuses"]))

  constructor(private _route: ActivatedRoute) {
  }
}

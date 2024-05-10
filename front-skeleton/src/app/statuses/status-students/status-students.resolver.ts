import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router"
import { StatusService } from "../../services/status.service"
import { Observable } from "rxjs";
import { Student } from "../../models/student.model"

export const StatusStudentsResolver: ResolveFn<Student[]> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(StatusService).findStudentsFromStatus(route.params["id"])
}

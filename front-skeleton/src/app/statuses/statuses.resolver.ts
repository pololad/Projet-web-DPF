import { inject } from "@angular/core"
import { ResolveFn } from "@angular/router"
import { StatusService } from "services/status.service"
import { Status } from "models/status.model"

export const StatusesResolver: ResolveFn<Status[]> = () => {
  return inject(StatusService).findAll()
}

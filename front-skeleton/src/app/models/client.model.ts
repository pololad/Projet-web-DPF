import { Status } from "./status.model"
import { Offer } from "./offer.model"

export interface Client {
  id?: bigint
  image?: string
  firstName: string
  lastName: string
  birthdate?: Date
  offers?: Offer[]
  status: Status
}

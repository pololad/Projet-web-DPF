import {Offer} from "./offer.model";
import {Status} from "./status.model";

export interface Student {
  id?: bigint
  image?: string
  firstName: string
  lastName: string
  birthdate?: Date
  offers?: Offer[]
  status: Status
  password : string

}


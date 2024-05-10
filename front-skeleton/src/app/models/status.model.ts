
import {Student} from "./student.model";

export interface Status {
  id?: bigint
  name: string
  students: Student[]
}

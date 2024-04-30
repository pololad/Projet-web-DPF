import { Client } from "./client.model"

export interface Status {
  id?: bigint
  name: string
  client: Client[]
}

import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Offer } from "models/offer.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class OfferService {
  constructor(private http: HttpClient) {}

  private offersUrl = "http://localhost:8080/offers"

  findAll(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offersUrl)
  }
}

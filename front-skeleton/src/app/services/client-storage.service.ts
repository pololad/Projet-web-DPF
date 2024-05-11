// client-storage.service.ts

import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Student } from "../models/student.model";

@Injectable({
  providedIn: 'root'
})
export class ClientStorageService {
  private clientSubject: BehaviorSubject<Student | null> = new BehaviorSubject<Student | null>(null);

  constructor() {}

  setClient(client: Student): void {
    this.clientSubject.next(client);
  }

  getClient(): Observable<Student | null> {
    return this.clientSubject.asObservable();
  }
}

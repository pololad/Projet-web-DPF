// home.component.ts

import { Component, OnInit } from "@angular/core";
import { ClientStorageService } from "../services/client-storage.service";
import { Student } from "../models/student.model";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  client: Student | null = null;

  constructor(private clientStorageService: ClientStorageService) {}

  ngOnInit(): void {
    // Récupérer les informations du client depuis le service
    this.clientStorageService.getClient().subscribe(client => {
      this.client = client;
    });
  }
}

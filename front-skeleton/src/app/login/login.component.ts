import { Component } from '@angular/core';
import { Student } from '../models/student.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  student: Student | null = null;

  constructor(private studentService: StudentService) {}

  login() {
    // Appeler le service pour vérifier les informations de connexion
    this.studentService.authenticate(this.username, this.password).subscribe(
      (response: Student) => {
        this.student = response;
        console.log('Connecté avec succès !', this.student);
        // Redirection vers une autre page ou traitement supplémentaire
      },
      (error) => {
        console.error('Erreur de connexion :', error);
        // Afficher un message d'erreur à l'utilisateur
      }
    );
  }
}

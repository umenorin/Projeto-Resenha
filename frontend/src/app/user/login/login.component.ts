import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrigido para 'styleUrls' no plural
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router,private userService: UserService) {}

  onSigup(){
    this.router.navigate([`/user/signup`])
  }

  onSubmit() {
    // Lógica para submissão de login
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    this.userService.login(this.email, this.password).subscribe(
      response => {
        // Sucesso no login
        console.log('Login bem-sucedido:', response);
        this.router.navigate(['/home']);
      },
      error => {
        // Falha no login
        console.error('Erro no login:', error);
      }
    );
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Usuario {
  nome: string;
  idade: number;
  profissao: string;
  email: string;
  status: boolean;
  mostrar?: boolean; 
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Painel de Usuarios';


  usuarios: Usuario[] = [];

  nome: string = '';
  idade: number = 0;
  profissao: string = '';
  email: string = '';
  status: boolean = false;
  mostrar: boolean = false;

  
  addUsuario() {
    const novoUsuario: Usuario & { mostrar?: boolean } = {
      nome: this.nome,
      idade: this.idade,
      profissao: this.profissao,
      email: this.email,
      status: this.status,
      mostrar: false
    };
    this.usuarios.push(novoUsuario);
  }
  
}

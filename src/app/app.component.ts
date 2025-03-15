import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  correo = 'alejandro.sanchez-serrano@iesruizgijon.com';

  //Se tiene pensado meterle lógica mas adelante.
  usuarioLogueado = false; 
  nombreUsuario = 'Alejandro';
}

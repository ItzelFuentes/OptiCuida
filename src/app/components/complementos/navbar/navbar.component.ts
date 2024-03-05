import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteServices } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  loader = true;
  isLoggedIn = false;
  username: string | null = null;

  constructor(private pacienteServices: PacienteServices, private router: Router) {}

  logout(): void {
    this.pacienteServices.logout().subscribe({
      next: () => {
        window.location.reload();
      },
      error: (error) => {
        console.error('Error al desloguear:', error);
      }
    });
  }

  redirectToLogin(): void {
    this.router.navigate(['/Login']); // Cambia '/login' por la ruta adecuada
  }
  ngOnInit():void {
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
    this.isLoggedIn = localStorage.getItem('token') !== null;
    this.username = localStorage.getItem('username');
  }

}

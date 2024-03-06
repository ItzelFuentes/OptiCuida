import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteServices } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup;
  loader = true;

  ngOnInit():void {
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
  }

  pacienteService = inject(PacienteServices);
  router = inject(Router);

  constructor(){
    this.formulario = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit(){
    const response = await this.pacienteService.login(this.formulario.value);
    if(!response.error){
      localStorage.setItem('token',response.token);
      localStorage.setItem('username',response.username);
      localStorage.setItem('userRole',response.userRole);
      this.router.navigate(['/Inicio']).then(() => {
        window.location.reload();
      });
    }
  }

}

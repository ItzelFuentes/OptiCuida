import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacientesComponent } from './components/formularios/registrar-pacientes/registrar-pacientes.component';
import { IndexComponent } from './components/vistas/index/index.component'
import { ProfesionalesComponent } from './components/vistas/profesionales/profesionales.component';
import { PreciosComponent } from './components/vistas/precios/precios.component';
import { LoginComponent } from './components/formularios/login/login.component';
import { SignupComponent } from './components/formularios/signup/signup.component';
import { NotFoundComponent } from './components/complementos/not-found/not-found.component';


const routes: Routes = [
  {path: 'Inicio', component: IndexComponent},
  {path: 'RegistrarPaciente', component: RegistrarPacientesComponent},
  {path: 'VerProfesionales', component: ProfesionalesComponent},
  {path: 'Precios', component: PreciosComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Signup', component: SignupComponent},
  {path: '**',component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarPacientesComponent } from './components/formularios/registrar-pacientes/registrar-pacientes.component';
import { IndexComponent } from './components/vistas/index/index.component'
import { ProfesionalesComponent } from './components/vistas/profesionales/profesionales.component';
import { PreciosComponent } from './components/vistas/precios/precios.component';
import { LoginComponent } from './components/formularios/login/login.component';
import { SignupComponent } from './components/formularios/signup/signup.component';


const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'registrarPaciente', component: RegistrarPacientesComponent},
  {path: 'verProfesionales', component: ProfesionalesComponent},
  {path: 'precios', component: PreciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '**',redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

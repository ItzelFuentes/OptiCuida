import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RegistrarPacientesComponent } from './components/formularios/registrar-pacientes/registrar-pacientes.component';
import { LoginComponent } from './components/formularios/login/login.component';
import { SignupComponent } from './components/formularios/signup/signup.component';
import { IndexComponent } from './components/vistas/index/index.component';
import { NavbarComponent } from './components/complementos/navbar/navbar.component';
import { FooterComponent } from './components/complementos/footer/footer.component';
import { ProfesionalesComponent } from './components/vistas/profesionales/profesionales.component';
import { PreciosComponent } from './components/vistas/precios/precios.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxPayPalModule } from 'ngx-paypal';
import { NotFoundComponent } from './components/complementos/not-found/not-found.component';
import { RoleGuard } from './components/complementos/RoleGuard';
import { DeniedComponent } from './components/complementos/denied/denied.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrarPacientesComponent,
    LoginComponent,
    SignupComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    ProfesionalesComponent,
    PreciosComponent,
    NotFoundComponent,
    DeniedComponent
  ],
  imports: [
    BrowserModule,
    NgxPayPalModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SweetAlert2Module,
    BreadcrumbModule
  ],
  providers: [RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

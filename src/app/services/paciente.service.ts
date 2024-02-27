import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';
const requestOptions = {
    withCredentials: true,
  };

@Injectable({
  providedIn: 'root'
})
export class PacienteServices {
  constructor(private http:HttpClient) {  }

  getPacientes(): Observable<any>{
    return this.http.get<any[]>('http://localhost:9000/api/pac',requestOptions);
  }

  getCiudades(): Observable<any>{
    return this.http.get<any[]>('http://localhost:9000/api/pac/ciu',requestOptions);
  }

  guardarPaciente(aspirante: FormData): Observable<any> {
    return this.http.post('http://localhost:9000/api/pac', aspirante);
  }

  obtenerPaciente(id: string): Observable<any>{
    return this.http.get('http://localhost:9000/api/pac' + id);
  }

}

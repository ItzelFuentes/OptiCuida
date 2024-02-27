import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Paciente } from 'src/app/models/paciente';
import { PacienteServices } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent {

  loading = true;
  loader = true;

  ngOnInit(): void {
    this.obtenerPacientes();
    setTimeout(()=>{
      this.loader = false;
    }, 2000);
  }

  constructor(private _pacienteService: PacienteServices,
    public sanitizer: DomSanitizer) {
    }

  listPaciente: Paciente[] = [];

  obtenerPacientes() {
    this._pacienteService.getPacientes().subscribe(data => {
      console.log(data);
      this.listPaciente = data;
      this.loading = false;
    },error => {
      console.log(error);
    })
  }

  getBufferImageSrc(buffer: ArrayBuffer): SafeUrl {
    const blob = new Blob([buffer]);
    const imageUrl = URL.createObjectURL(blob);
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

  getSanitizedImageUrl(base64String: string, imageType: string): SafeUrl {
      const imageUrl = `data:image/${imageType};base64,${base64String}`;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }

}

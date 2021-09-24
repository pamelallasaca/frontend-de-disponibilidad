import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo';
import { Disponibilidad } from 'src/app/models/disponibilidad';
import { Usuario } from 'src/app/models/usuario';
import { CicloService } from 'src/app/services/ciclo.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css'],
})
export class DisponibilidadComponent implements OnInit {
  usuarios: Usuario[] = [];
  ciclos: Ciclo[] = [];
  dias: string[] = [
    'LUNES',
    'MARTES',
    'MIERCOLES',
    'JUEVES',
    'VIERNES',
    'SÁBADO',
    'DOMINGO',
  ];

  disponibilidad: Disponibilidad = {
    ciclo: { idCiclo: -1 },
    usuario: { idUsuario: -1 },
  };

  constructor(
    private usuarioService: UsuarioService,
    private cicloService: CicloService,
    private disponibilidadService: DisponibilidadService
  ) {
    this.usuarioService
      .listarUsuarios()
      .subscribe((usuarios) => (this.usuarios = usuarios));
    this.cicloService
      .listarCiclos()
      .subscribe((ciclos) => (this.ciclos = ciclos));
  }

  ngOnInit(): void {}

  registraDisponibilidad() {
    console.log(this.disponibilidad);

    this.disponibilidadService.registrar(this.disponibilidad).subscribe(
      (response) => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

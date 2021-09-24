import { Ciclo } from './ciclo';
import { Usuario } from './usuario';

export class Disponibilidad {
  idDisponibilidad?: number;
  horaInicio?: string;
  horaFin?: string;
  dia?: string;
  ciclo?: Ciclo;
  usuario?: Usuario;
}
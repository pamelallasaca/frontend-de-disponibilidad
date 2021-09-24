import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DisponibilidadComponent } from './components/add-disponibilidad/add-disponibilidad.component';

const routes: Routes = [
  
  { path: 'disponibilidad', component: DisponibilidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
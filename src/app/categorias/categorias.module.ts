import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms' // <-- Isso está correto

import { CategoriasModuleRoutingModule } from './categorias-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';

@NgModule({
  declarations: [
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriasModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoriasModule { }
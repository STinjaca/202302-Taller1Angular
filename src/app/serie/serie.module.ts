import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListarComponent } from './serie-listar/serie-listar.component';
import { Serie } from './Serie';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SerieListarComponent],
  declarations: [SerieListarComponent]
})
export class SerieModule {
 }

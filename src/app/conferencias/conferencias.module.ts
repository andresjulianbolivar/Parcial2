import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciasListComponent } from './conferencias-list/conferencias-list.component';
import { ConferenciasDetailComponent } from './conferencias-detail/conferencias-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ConferenciasListComponent],
  declarations: [ConferenciasListComponent, ConferenciasDetailComponent]
})
export class ConferenciasModule { }

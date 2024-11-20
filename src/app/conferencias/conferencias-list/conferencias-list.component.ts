import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  selector: 'app-conferencias-list',
  templateUrl: './conferencias-list.component.html',
  styleUrls: ['./conferencias-list.component.css']
})
export class ConferenciasListComponent implements OnInit {

  conferencias: Array<Conferencia> = []; 

  upcomingConferences: number = 0;

  selected:Boolean = false;

  selectedConference!: Conferencia;

  constructor(private conferenciaService: ConferenciaService) { }

  onSelected(conferencia: Conferencia): void
  {
    this.selected=true;
    this.selectedConference = conferencia;
  }

  getConferencias(): void {
    this.conferenciaService.getConferencias().subscribe((conferencias) => {
      this.conferencias = conferencias;
      this.calculateUpcomingConferences();
    });
  }

  calculateUpcomingConferences(): void
  {
    let currentDate = new Date();
    let nConferencias: number = 0;
    for (let index = 0; index < this.conferencias.length; index++) {  
    if (this.conferencias[index].starts > currentDate)
    {
      nConferencias = nConferencias +1;
    }
  }

  this.upcomingConferences = nConferencias;
  }

  ngOnInit() {
    this.getConferencias();
  }

}

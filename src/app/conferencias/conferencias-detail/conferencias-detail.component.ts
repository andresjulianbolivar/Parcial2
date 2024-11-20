import { Component, Input, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';

@Component({
  selector: 'app-conferencias-detail',
  templateUrl: './conferencias-detail.component.html',
  styleUrls: ['./conferencias-detail.component.css']
})
export class ConferenciasDetailComponent implements OnInit {

  @Input() conferenciaDetail!: Conferencia;

  constructor() { }

  ngOnInit() {
  }

}

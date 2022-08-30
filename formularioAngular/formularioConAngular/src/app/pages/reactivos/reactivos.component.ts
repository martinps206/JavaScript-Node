import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactivos',
  templateUrl: './reactivos.component.html',
  styleUrls: ['./reactivos.component.css']
})
export class ReactivosComponent implements OnInit {

  tipo: string = 'Reactivos';
  constructor() { }

  ngOnInit(): void {
  }

}

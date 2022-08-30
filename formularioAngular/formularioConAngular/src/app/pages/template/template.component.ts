import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  tipo: string = 'Template';
  generos: any = ['Masculino', 'Femenino', 'Otros']
  usuarios = {
    nombre: 'Matin',
    apellido: 'Paliza',
    email: 'martinpaliza@email.com',
    genero: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar(forma: NgForm){

    if (forma.invalid){
      Object.values(forma.controls).forEach(control => {
        control.markAsTouched();
      })

      return;
    }
    console.log(forma);

  }

}

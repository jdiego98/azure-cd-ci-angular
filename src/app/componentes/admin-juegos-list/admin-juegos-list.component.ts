import { Component, OnInit } from '@angular/core';
import {Juego} from '../../models/juego';

@Component({
  selector: 'app-admin-juegos-list',
  templateUrl: './admin-juegos-list.component.html',
  styleUrls: ['./admin-juegos-list.component.css']
})
export class AdminJuegosListComponent implements OnInit {



  dataJuegos: Juego[] = [
    {id: 1, nombre: 'Juego1', precio: 15000},
    {id: 2, nombre: 'Juego2', precio: 12000},
    {id: 3, nombre: 'Juego3', precio: 10000}
  ];

  displayedColumns: string[] = ['id', 'nombre', 'precio'];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  http = inject(HttpClient);

  personajes: any[] = [];
  filtrados: any[] = [];

  busqueda = '';

  constructor() {
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.http
      .get<any>('https://rickandmortyapi.com/api/character')
      .subscribe(data => {
        this.personajes = data.results;
        this.filtrados = data.results;
      });
  }

  buscar() {
    this.filtrados = this.personajes.filter(p =>
      p.name.toLowerCase().includes(
        this.busqueda.toLowerCase()
      )
    );
  }
}
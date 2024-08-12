import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  query: string = '';

  constructor(private router: Router) {}

  onSearch(): void {
    const routes: { [key: string]: string } = {
      'a': '/a',
      'b': '/b',
      'c': '/c',
      'd': '/d',
      'e': '/e',
      'f': '/f',
      'g': '/g',
      'h': '/h',
      'i': '/i',
      'j': '/j',
      'k': '/k',
      'l': '/l',
      'll':'/ll',
      'm': '/m',
      'n': '/n',
      'o': '/o',
      'p': '/p',
      'q': '/q',
      'r': '/r',
      'rr':'/rr',
      's': '/s',
      't': '/t',
      'u': '/u',
      'v': '/v',
      'w': '/w',
      'x': '/x',
      'y': '/y',
      'z': '/z',
      'hermana': '/hermana',
      'hermano': '/hermano',
      'hija': '/hija',
      'hijo': '/hijo',
      'mama': '/mama',
      'mamá': '/mama',
      'papa': '/papa',
      'papá': '/papa',
      'tia': '/tia',
      'tía': '/tia',
      'tio': '/tio',
      'tío': '/tio',
      'cuando': '/cuando',
      'cuándo': '/cuando',
      'cual': '/cual',
      'cuál': '/cual',
      'como': '/como',
      'cómo': '/como',
      'que es': '/quees',
      'qué es': '/quees',
      'quien': '/quien',
      'quién': '/quien',
      'donde': '/donde',
      'dónde': '/donde',
      'por que': '/porque',
      'por qué': '/porque',
      'enero': '/enero',
      'febrero': '/febrero',
      'marzo': '/marzo',
      'abril': '/abril',
      'mayo': '/mayo',
      'junio': '/junio',
      'julio': '/julio',
      'agosto': '/agosto',
      'septiembre': '/septiembre',
      'octubre': '/octubre',
      'noviembre': '/noviembre',
      'diciembre': '/diciembre',
      'amarillo': '/amarillo',
      'azul': '/azul',
      'blanco': '/blanco',
      'gris': '/gris',
      'morado': '/morado',
      'naranja': '/naranja',
      'negro': '/negro',
      'rojo': '/rojo',
      'rosa': '/rosa',
      'verde': '/verde'
      
      // Agrega más rutas según sea necesario
    };

    const lowerCaseQuery = this.query.toLowerCase();
    if (routes[lowerCaseQuery]) {
      this.router.navigate([routes[lowerCaseQuery]]);
    } else {
      alert('Palabra no encontrada');
    }
  }
}

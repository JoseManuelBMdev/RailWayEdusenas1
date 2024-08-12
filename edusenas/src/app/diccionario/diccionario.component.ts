import { Component } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-diccionario',
  standalone: true,
  imports: [SearchBarComponent],
  templateUrl: './diccionario.component.html',
  styleUrl: './diccionario.component.css'
})
export class DiccionarioComponent {
  
}

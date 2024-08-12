import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  title: string = '';

  constructor(private http:HttpClient){ }

  showTitle(name: string) {
    this.title = name;
  }

  hideTitle() {
    this.title = '';
  }

  ngOnInit(): void {
  
    console.log('El componente se ha inicializado.');
    this.http.get('http://127.0.0.1:5000/api/v1/users')
        .subscribe({
          next: data => {
            
              console.log('Éxito:', data);
              //this.router.navigate(['/menu']);
          },
          error: err => {
            console.error('Error:', err);
            //this.errore = true
          
          }
        });
  }
}

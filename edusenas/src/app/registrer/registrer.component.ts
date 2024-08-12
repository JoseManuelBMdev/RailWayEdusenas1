import { Component, Injectable } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-registrer',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrer.component.html',
  styleUrl: './registrer.component.css'
})

export class RegistrerComponent {

  constructor(private http:HttpClient, private router: Router){ }

  errore = false;
  success = false;

  profileForm = new FormGroup({
    edad: new FormControl('', Validators.required),
    name: new FormControl('', [ Validators.required, Validators.pattern('[a-z A-Z]*')]),
    email: new FormControl('',[ Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}'), Validators.required ]),
    password: new FormControl('', [ Validators.pattern('^.{8,16}$'), Validators.required ]),
  });

  registrerVal(){
    console.log(this.profileForm.value)
        if (this.profileForm.valid) {
      const datosFormulario = this.profileForm.value;
      this.errore = false

      this.http.post('http://127.0.0.1:8000/api/register', datosFormulario)
        .subscribe(
          (respuesta) => {
            console.log('Éxito:', respuesta);
            this.success = true;
            //this.router.navigate(['/clients']);
          },
          (error) => {
            console.error('Error:', error);
            this.errore = true;
          }
        );
    }
  }

  get isNameInvalid() {
    const control = this.profileForm.get('name');
    return control ? control.hasError('pattern') : false;
  }

  get isPassInvalid() {
    const control = this.profileForm.get('password');
    return control ? control.hasError('pattern') : false;
  }

  get isMailInvalid() {
    const control = this.profileForm.get('email');
    return control ? control.hasError('pattern') : false;
  }
}

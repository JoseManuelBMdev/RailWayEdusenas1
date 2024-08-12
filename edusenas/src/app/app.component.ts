import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './perfil/perfil.component';
import { ModalComponent } from './modal/modal.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FormsModule, FlexLayoutModule, PerfilComponent, ModalComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edusenas';
}

@NgModule({
  imports: [
 
    FlexLayoutModule,
    AppComponent

  ],
 
})
export class AppModule { }
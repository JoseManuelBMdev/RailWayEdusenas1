import { Component } from '@angular/core';

@Component({
  selector: 'app-letraa',
  templateUrl: './letraa.component.html',
  styleUrls: ['./letraa.component.css']
})
export class LetraaComponent {

  isFlipped: boolean = false;

  constructor() { }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

}

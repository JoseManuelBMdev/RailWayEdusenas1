import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abcsec1',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abcsec1.component.html',
  styleUrls: ['./abcsec1.component.css']
})
export class Abcsec1Component {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  
  pages = [
    { id: 1, imageSrc1: 'assets/videoimg_abecedario/abecedario/letraa.jpg', imageSrc: 'assets/img/abc/arbol.png', title: 'A', instruction: 'Posiciona tu mano en forma de puño con la palma mirando al frente, luego saca el dedo índice y estíralo horizontalmente hacia un lado.' },
    { id: 2, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrab.jpg', imageSrc: 'assets/img/abc/barco.png', title: 'B', instruction: 'Posiciona tu mano de manera vertical con los dedos índice, medio y meñique extendidos; luego dobla el dedo anular de forma que cruce la mitad de la palma.' },
    { id: 3, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrac.jpg', imageSrc: 'assets/img/abc/casa.png', title: 'C', instruction: 'Posiciona tu mano de manera que forme un círculo, pero sin cerrarlo completamente, de modo que tenga la figura de una "C".' },
    { id: 4, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrad.jpg',imageSrc: 'assets/img/abc/dado.png', title: 'D', instruction: 'Posiciona tu mano de forma que las yemas del dedo medio y del dedo índice se toquen mientras todos los demás dedos estén doblados, y el dedo anular quede vertical y recto.' },
    { id: 5, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrae.jpg', imageSrc: 'assets/img/abc/elote.png', title: 'E', instruction: 'Posiciona toda tu mano de forma cerrada, doblando todos los dedos, pero no completamente, de manera que queden a la altura del inicio de la palma.' },
    { id: 6, imageSrc1: 'assets/videoimg_abecedario/abecedario/letraf.jpg', imageSrc: 'assets/img/abc/foco.png', title: 'F', instruction: 'Posiciona tu mano de manera que los dedos índice y pulgar se doblen y el pulgar quede sobre el lado del índice, mientras los demás dedos estén rectos de manera vertical.' },
    
  ];

  currentPage = 0;
  progressWidth = '0%';

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.updateProgress();
      this.cdr.detectChanges(); // Fuerza la detección de cambios
    } else {
      // Handle the case when the progress is full
      this.currentPage = -1; // Special value to indicate the final page
    }
  }

  updateProgress() {
    const progressPercentage = ((this.currentPage + 1) / this.pages.length) * 100;
    this.progressWidth = `${progressPercentage}%`;
  }

  get currentPageData() {
    return this.currentPage >= 0 ? this.pages[this.currentPage] : null;
  }

  isFinalPage() {
    return this.currentPage === -1;
  }

  restart() {
    this.currentPage = 0;
    this.updateProgress();
    this.cdr.detectChanges(); // Fuerza la detección de cambios
  }

  nextLesson() {
    console.log('Navigating to /ejercicios-abcseccion1');
    this.router.navigate(['/ejercicios-abcseccion1']);
  }
}

import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abcsec3',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abcsec3.component.html',
  styleUrls: ['./abcsec3.component.css']
})
export class Abcsec3Component {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  
  pages = [
    { id: 1, imageSrc1: 'assets/videoimg_abecedario/abecedario/letran.jpg', imageSrc: 'assets/img/abc/NIÑO.png', title: 'N', instruction: 'Posiciona tu mano de manera vertical y cierra todos los dedos excepto el pulgar, el índice y el dedo medio. Alinea estos tres dedos rectamente y coloca el dedo pulgar sobre el dedo índice, mirando hacia la palma.' },
    { id: 2, videoSrc: 'assets/videoimg_abecedario/abecedario/letrann.mp4', imageSrc: 'assets/img/abc/ÑANDU.png', title: 'Ñ', instruction: 'Posiciona tu mano de manera vertical y cierra todos los dedos excepto el pulgar, el índice y el dedo medio. Alinea estos tres dedos rectamente y coloca el dedo pulgar sobre el dedo índice, mirando hacia la palma. ' },
    { id: 3, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrao.jpg', imageSrc: 'assets/img/abc/OSO.png', title: 'O', instruction: 'Posiciona tu mano de manera vertical y dobla los dedos pulgar y anular de manera que las yemas de estos dos dedos se toquen. Dobla suavemente los demás dedos para que formen una figura de "O".' },
    { id: 4, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrap.jpg',imageSrc: 'assets/img/abc/PERRO.png', title: 'P', instruction: 'Posiciona tu mano de manera vertical y cierra todos los dedos excepto el pulgar, el índice y el dedo medio. Alinea estos tres dedos rectamente y coloca el dedo pulgar sobre el dedo índice, mirando hacia la palma.' },
    { id: 5, videoSrc: 'assets/videoimg_abecedario/abecedario/letraq.mp4', imageSrc: 'assets/img/abc/QUESO.png', title: 'Q', instruction: 'Posiciona tu mano de manera vertical y dobla todos los dedos excepto el dedo anular y el pulgar. Dobla suavemente el dedo anular y el dedo índice, pero no los cierres completamente. Luego, realiza un movimiento lento de arriba hacia abajo con la mano.' },
    { id: 6, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrar.jpg', imageSrc: 'assets/img/abc/RATON.png', title: 'R', instruction: 'Posiciona tu mano de manera vertical y dobla los dedos anular, meñique y pulgar. Coloca los dedos índice y medio rectamente, y cruza el dedo índice sobre el dedo medio. Asegúrate de que los dedos doblados se junten.' },
    { id: 7, videoSrc: 'assets/videoimg_abecedario/abecedario/letrarr.mp4', imageSrc: 'assets/img/abc/gorra.jpeg', title: 'RR', instruction: 'Posiciona tu mano de manera vertical y dobla los dedos anular, meñique y pulgar. Coloca los dedos índice y medio rectamente, y cruza el dedo índice sobre el dedo medio. Asegúrate de que los dedos doblados se junten. Al finalizar, desliza esta seña hacia la izquierda en forma vertical suavemente.' },
    { id: 8, imageSrc1: 'assets/videoimg_abecedario/abecedario/letras.jpg', imageSrc: 'assets/img/abc/SILLA.png', title: 'S', instruction: 'Posiciona tu mano de manera vertical y dobla todos los dedos suavemente a la altura donde empieza la palma de la mano. Coloca el dedo índice sobre el dedo anular.' },
    { id: 9, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrat.jpg', imageSrc: 'assets/img/abc/TREN.png', title: 'T', instruction: 'Posiciona tu mano de manera vertical y forma un puño con todos los dedos. Entre los dedos medio e índice, coloca el dedo anular de forma recta.' },
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
    console.log('Navigating to /ejercicios-abcseccion3');
    this.router.navigate(['/ejercicios-abcseccion3']);
  }
}

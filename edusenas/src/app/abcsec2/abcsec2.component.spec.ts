import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abcsec2',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abcsec2.component.html',
  styleUrls: ['./abcsec2.component.css']
})
export class Abcsec2Component {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  
  pages = [
    { id: 1, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrag.jpg', imageSrc: 'assets/img/abc/GATO.png', title: 'G', instruction: 'Posiciona tu mano de forma horizontal. Dobla solamente los dedos medio, anular y meñique. Coloca el dedo pulgar en forma vertical y el dedo índice en forma horizontal, de modo que la seña forme una "L".' },
    { id: 2, videoSrc: 'assets/videoimg_abecedario/abecedario/letrah.mp4', imageSrc: 'assets/img/abc/HIELO.png', title: 'H', instruction: 'Posiciona tu mano de forma horizontal. Dobla solamente los dedos anular y meñique. Coloca el dedo pulgar en forma vertical y los dedos índice y medio en forma horizontal, de modo que la seña forme una "L".' },
    { id: 3, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrai.jpg', imageSrc: 'assets/img/abc/IGUANA.png', title: 'I', instruction: 'Posiciona tu mano de manera vertical en forma de un puño, pero alza el dedo meñique verticalmente y recto.' },
    { id: 4, videoSrc: 'assets/videoimg_abecedario/abecedario/letraj.mp4', imageSrc: 'assets/img/abc/JIRAFA.png', title: 'J', instruction: 'Posiciona tu mano de manera vertical en forma de un puño. Alza el dedo meñique verticalmente y recto, y luego realiza la seña de la "J" moviendo el dedo meñique desde abajo hacia arriba en un movimiento curvo.' },
    { id: 5, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrak.jpg', imageSrc: 'assets/img/abc/KOALA.png', title: 'K', instruction: 'Posiciona tu mano en forma vertical. Coloca tus dedos anular y medio de manera horizontal. Sobrepon el dedo pulgar entre los dedos anular y medio. Cierra completamente los demás dedos. Al finalizar, haz un movimiento horizontal suavemente.' },
    { id: 6, imageSrc1: 'assets/videoimg_abecedario/abecedario/letral.jpg', imageSrc: 'assets/img/abc/LUNA.png', title: 'L', instruction: 'Posiciona tu mano de manera vertical, cierra los dedos medio, anular y meñique, y forma una seña de "L" con el dedo índice y el pulgar.' },
    { id: 7, videoSrc: 'assets/videoimg_abecedario/abecedario/letrall.mp4', imageSrc: 'assets/img/abc/LLUVIA.png', title: 'LL', instruction: 'Posiciona tu mano de manera vertical, cierra los dedos medio, anular y meñique, y forma una seña de "L" con el dedo índice y el pulgar. Al finalizar, haz un movimiento lateral hacia la izquierda.' },
    { id: 8, imageSrc1: 'assets/videoimg_abecedario/abecedario/letram.jpg', imageSrc: 'assets/img/abc/MANZANA.png', title: 'M', instruction: 'Posiciona tu mano de manera horizontal. Dobla los dedos pulgar y meñique, y coloca los dedos índice, medio y anular de manera recta hacia abajo. Coloca los dedos pulgar y meñique detrás de estos tres dedos rectos.' },
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
    console.log('Navigating to /ejercicios-abcseccion2');
    this.router.navigate(['/ejercicios-abcseccion2']);
  }
}

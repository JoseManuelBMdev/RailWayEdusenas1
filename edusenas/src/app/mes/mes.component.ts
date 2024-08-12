import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mes.component.html',
  styleUrls: ['./mes.component.css']
})
export class MesComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  pages = [
    { id: 1, videoSrc: 'assets/videoimg_abecedario/meses/enero.mp4', imageSrc: 'assets/img/meses/enero.png', title: 'Enero', instruction: 'Forma tu mano en forma de "E" y posiciona la mano de manera que esté orientada hacia abajo. Luego, mueve la mano de izquierda a derecha manteniendo la forma de "E" con la muñeca.' },
    { id: 2, videoSrc: 'assets/videoimg_abecedario/meses/febrero.mp4', imageSrc: 'assets/img/meses/febrero.png', title: 'Febrero', instruction: 'Posiciona la mano de forma horizontal, de modo que el dedo anular y el dedo índice formen una "O" no muy pronunciada, mientras que los dedos medio, anular y meñique queden rectos horizontalmente. Con esta posición, mueve la mano con la muñeca de izquierda a derecha en movimientos horizontales' },
    { id: 3, videoSrc: 'assets/videoimg_abecedario/meses/marzo.mp4', imageSrc: 'assets/img/meses/marzo.png', title: 'Marzo', instruction: 'Posiciona tu mano y dobla los dedos anular y meñique, dejando solamente los tres dedos restantes extendidos. Lleva la mano de esa forma al lado lateral de la cabeza, de manera horizontal, y realiza movimientos circulares suaves con los tres dedos.'},
    { id: 4, videoSrc: 'assets/videoimg_abecedario/meses/abril.mp4', imageSrc: 'assets/img/meses/abril.png', title: 'Abril', instruction: 'Posiciona tu mano y cierra el puño, luego saca solamente el dedo índice de forma horizontal. Dirige la mano en esa posición a la parte lateral de la cabeza, a la altura de la oreja. Con la mano en esa posición, haz círculos de forma que la palma de la mano se vea de frente.' },
    { id: 5, videoSrc: 'assets/videoimg_abecedario/meses/mayo.mp4', imageSrc: 'assets/img/meses/mayo.png', title: 'Mayo', instruction: 'Posiciona tu mano y dobla los dedos anular y meñique, dejando solamente los tres dedos restantes extendidos. Coloca la mano en posición horizontal y mueve la muñeca de izquierda a derecha en esa posición.' },
    { id: 6, videoSrc: 'assets/videoimg_abecedario/meses/junio.mp4', imageSrc: 'assets/img/meses/junio.png', title: 'Junio', instruction: 'Forma tus puños y coloca el dedo índice sobre el dedo anular en cada mano, de manera que el dedo anular no sobresalga demasiado. Luego, golpea suavemente. Después, lleva el dedo anular a tu mejilla y deslízalo suavemente.' },
    { id: 7, videoSrc: 'assets/videoimg_abecedario/meses/julio.mp4', imageSrc: 'assets/img/meses/julio.png', title: 'Julio', instruction: 'Posiciona la mano de manera que dobles los dedos medio y anular, y mantén la mano horizontalmente. Con la muñeca, mueve la mano en esa posición de lado izquierdo a derecho de forma horizontal.' },
    { id: 8, videoSrc: 'assets/videoimg_abecedario/meses/agosto.mp4', imageSrc: 'assets/img/meses/agosto.png', title: 'Agosto', instruction: 'Posiciona tu mano y cierra el puño, luego saca solamente el dedo índice de forma horizontal. Mueve la muñeca de lado izquierdo a derecho mientras mantienes el dedo índice extendido.' },
    { id: 9, videoSrc: 'assets/videoimg_abecedario/meses/septiembre.mp4', imageSrc: 'assets/img/meses/septiembre.png', title: 'Septiembre', instruction: 'Posiciona tu mano formando un puño, de manera que el dedo anular quede arriba de todos los dedos cerrados. Coloca la mano en posición horizontal y mueve la muñeca de derecha a izquierda en esa posición de forma horizontal.' },
    { id: 10, videoSrc: 'assets/videoimg_abecedario/meses/octubre.mp4', imageSrc: 'assets/img/meses/octubre.png', title: 'Octubre', instruction: 'Forma tu mano en forma de "O" y colócala en posición horizontal. Luego, mueve la mano de izquierda a derecha de manera horizontal.' },
    { id: 11, videoSrc: 'assets/videoimg_abecedario/meses/noviembre.mp4', imageSrc: 'assets/img/meses/noviembre.png', title: 'Noviembre', instruction: 'Posiciona tu mano de manera que dobles todos los dedos excepto el dedo anular y el dedo medio. Coloca la mano en forma horizontal y mueve la muñeca de izquierda a derecha en esa posición.' },
    { id: 12, videoSrc: 'assets/videoimg_abecedario/meses/diciembre.mp4', imageSrc: 'assets/img/meses/diciembre.png', title: 'Diciembre', instruction: 'Posiciona tu mano y coloca el dedo medio sobre el dedo anular, de manera que formen una "O". Mantén la mano en forma horizontal, con el dedo índice extendido y en forma de anular. Mueve los dedos medio y meñique hacia los lados izquierdo y derecho.' },

  ];
  currentPage = 0;
  progressWidth = '0%';

  constructor(private cdr: ChangeDetectorRef, private router: Router) {}

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.updateProgress();
      this.cdr.detectChanges(); // Fuerza la detección de cambios

      // Reiniciar el video
      if (this.videoPlayer) {
        const videoElement = this.videoPlayer.nativeElement;
        videoElement.load(); // Recarga el video
        videoElement.play(); // Opcional: reproduce automáticamente el video
      }
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
    console.log('Navigating to /ejercicios-mes');
    this.router.navigate(['/ejercicios-mes']);
  }
}




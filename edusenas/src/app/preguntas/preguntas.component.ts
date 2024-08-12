import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-preguntas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  pages = [
    { id: 1, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/caundo.mp4', imageSrc: 'assets/img/preguntas/comoP.jpg', title: '¿Cuándo?', instruction: 'Coloca la mano dominante en forma de "C" (Solo el dedo índice y pulgar, los otros dedos cerrados) mueve tu muñeca de arriba a abajo. Este gesto se utiliza en el contexto de una conversación para pedir información sobre el momento en que algo sucede.' },
    { id: 2, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/como.mp4', imageSrc: 'assets/img/preguntas/cualP.jpg', title: '¿Cómo?', instruction: 'Coloca ambas manos frente a ti con las palmas hacia arriba y los dedos ligeramente curvados, como si estuvieras sosteniendo algo en las manos. Luego, gira ambas muñecas hacia adentro y hacia afuera de manera alternada, creando un movimiento de rotación. ' },
    { id: 3, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/cual.mp4', imageSrc: 'assets/img/preguntas/cualP.jpg', title: '¿Cúal?', instruction: 'Forma una B con la mano dominante.Coloca la mano frente al pecho, con la palma hacia adentro y los dedos apuntando hacia arriba.Desliza la mano hacia arriba desde el pecho hasta el cuello o la parte superior del pecho.' },
    { id: 4, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/donde.mp4', imageSrc: 'assets/img/preguntas/cuandoP.jpg', title: '¿Dónde?', instruction: ' Coloca ambas manos en forma de "D" (dedo índice extendido, los otros dedos cerrados) y apunta hacia el frente. Luego, la mano dominante toca la otra mano.' },
    { id: 5, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/cuando.mp4', imageSrc: 'assets/img/preguntas/queesP1.jpg', title: '¿Cuántos?', instruction: 'Coloca una mano con la palma hacia arriba y los dedos ligeramente curvados, como si estuvieras sosteniendo algo. Luego, realiza un movimiento hacia arriba y hacia abajo con la mano. Este gesto simboliza la pregunta "¿Cuántos?" y se usa para pedir información sobre la cantidad de algo.' },
    { id: 6, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/porque.mp4', imageSrc: 'assets/img/preguntas/queP.jpg', title: '¿Por qué?', instruction: 'Coloca tu mano dominante en forma de "D" (dedo índice extendido y los otros dedos cerrados). Luego, lleva la mano realizando un movimiento hacia arriba con una ligera curvatura.' },
    { id: 7, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/quees.mp4', imageSrc: 'assets/img/preguntas/quien.jpg', title: '¿Qué es?', instruction: 'Coloca tu mano dominante en forma de Q. Realiza un movimiento hacia afuera y hacia arriba, alejándola de tu mentón mientras mantienes los dedos juntos' },
    { id: 8, videoSrc: 'assets/videoimg_abecedario/cuestionamientos/quien.mp4', imageSrc: 'assets/img/preguntas/queP.jpg', title: '¿Quién?', instruction: 'Coloca ambos dedos índices extendidos (de ambas manos) y pon un undice sobre el otro de modo que se haga una cru, luego, realiza un pequeño movimiento de los dedos índices de arriba a abajo, de modo que choquen los indices.' },
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
    console.log('Navigating to /ejercicios-preguntas');
    this.router.navigate(['/ejercicios-preguntas']);
  }
}




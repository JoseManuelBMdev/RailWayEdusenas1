import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-IntegrantesFamilia',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './integrantesfamilia.component.html',
  styleUrl: './integrantesfamilia.component.css'
})
export class IntegrantesfamiliaComponent{
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  pages = [
    { id: 1, videoSrc: 'assets/videoimg_abecedario/familia/hermana.mp4', imageSrc: 'assets/img/familia/hermana.png', title: 'Hermana', instruction: 'Frota los índices de ambas manos entre sí, luego forma una "L" con la mano dominante, colócala en la mejilla cerca de la boca y deslízala hacia abajo y hacia afuera en un solo gesto fluido.' },
    { id: 2, videoSrc: 'assets/videoimg_abecedario/familia/hermano.mp4', imageSrc: 'assets/img/familia/hermano.png', title: 'Hermano', instruction: 'Forma un puño con cada mano, luego extiende solo los dedos índices de ambas manos. Junta los dedos índices de ambas manos y frótalos entre sí con un movimiento suave.' },
    { id: 3, videoSrc: 'assets/videoimg_abecedario/familia/hija.mp4', imageSrc: 'assets/img/familia/hija.png', title: 'Hija', instruction: 'Coloca toda la mano en el hombro opuesto y deslízala de manera diagonal hacia el lado opuesto. Al finalizar, une los tres últimos dedos (meñique, anular y medio) y posiciona el pulgar en tu mejilla, luego desliza el pulgar hacia abajo.' },
    { id: 4, videoSrc: 'assets/videoimg_abecedario/familia/hijo.mp4', imageSrc: 'assets/img/familia/hijo.png', title: 'Hijo', instruction: ' Coloca toda la mano en el hombro opuesto y deslízala de manera diagonal hacia el lado opuesto. Al finalizar, une los tres últimos dedos (meñique, anular y medio)' },
    { id: 5, videoSrc: 'assets/videoimg_abecedario/familia/mama.mp4', imageSrc: 'assets/img/familia/mama.png', title: 'Mamá', instruction: 'Coloca tu mano en la barbilla y saca los dedos índice, medio y anular juntos, luego realiza 2 ligeros golpes con estos dedos contra la barbilla.' },
    { id: 6, videoSrc: 'assets/videoimg_abecedario/familia/papa.mp4', imageSrc: 'assets/img/familia/papa.png', title: 'Papá', instruction: 'Posiciona tu mano en la barbilla, saca los dedos índice y medio, y coloca el dedo anular entre ellos de manera que el anular se asome ligeramente sobre los otros dos dedos, luego golpea suavemente 2 veces sobre la barbilla.' },
    { id: 7, videoSrc: 'assets/videoimg_abecedario/familia/tia.mp4', imageSrc: 'assets/img/familia/tia.png', title: 'Tía', instruction: 'Forma tus puños y coloca el dedo índice sobre el dedo anular en cada mano, de manera que el dedo anular no sobresalga demasiado. Luego, golpea suavemente. Después, lleva el dedo anular a tu mejilla y deslízalo suavemente.' },
    { id: 8, videoSrc: 'assets/videoimg_abecedario/familia/tio.mp4', imageSrc: 'assets/img/familia/tio.png', title: 'Tió', instruction: 'Forma tus puños y coloca el dedo índice sobre el dedo anular en cada mano, de manera que el dedo anular no sobresalga demasiado.' },
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
    console.log('Navigating to /ejercicios-familia');
    this.router.navigate(['/ejercicios-familia']);
  }
}




import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  pages = [
    { id: 1, videoSrc: 'assets/videoimg_abecedario/colores/amarillo.mp4', imageSrc: 'assets/img/colores/amarillo.png', title: 'Amarillo', instruction: 'Forma una A con la mano dominante  Para ello, cierra todos los dedos sobre la palma de la mano.Mueve la mano de un lado a otro en un movimiento pequeño.' },
    { id: 2, videoSrc: 'assets/videoimg_abecedario/colores/azul.mp4', imageSrc: 'assets/img/colores/azul.png', title: 'Azul', instruction: 'Forma una A con la mano dominante y el pulgar hacia arriba.Coloca la mano frente a ti, a la altura del pecho, con la palma hacia adelante.Gira la muñeca de un lado a otro' },
    { id: 3, videoSrc: 'assets/videoimg_abecedario/colores/blanco.mp4', imageSrc: 'assets/img/colores/blanco.png', title: 'Blanco', instruction: 'Forma una B con la mano dominante.Coloca la mano frente al pecho, con la palma hacia adentro y los dedos apuntando hacia arriba.Desliza la mano hacia arriba desde el pecho hasta el cuello o la parte superior del pecho.' },
    { id: 4, videoSrc: 'assets/videoimg_abecedario/colores/gris.mp4', imageSrc: 'assets/img/colores/gris.png', title: 'Gris', instruction: ' Forma una G con la mano dominante.Coloca la mano frente a ti, a la altura del pecho, con la palma mirando hacia adelante.Gira la muñeca de un lado a otro, haciendo que el dedo índice y el pulgar se muevan en un pequeño arco.' },
    { id: 5, videoSrc: 'assets/videoimg_abecedario/colores/morado.mp4', imageSrc: 'assets/img/colores/morado.png', title: 'Morado', instruction: 'Forma una M con la mano dominante.Coloca la mano frente a ti, a la altura del pecho, con la palma hacia abajo.Mueve la mano en un pequeño arco  frente al cuerpo.' },
    { id: 6, videoSrc: 'assets/videoimg_abecedario/colores/naranja.mp4', imageSrc: 'assets/img/colores/naranja.png', title: 'Naranja', instruction: 'Forma una C con la mano dominante.Coloca la mano frente a la boca, con la palma hacia adentro.Abre y cierra la mano varias veces, simulando el acto de exprimir una naranja.' },
    { id: 7, videoSrc: 'assets/videoimg_abecedario/colores/negro.mp4', imageSrc: 'assets/img/colores/negro.png', title: 'Negro', instruction: 'Forma una N con la mano dominante.Coloca la mano frente a ati con la palma hacia arriba , desliza la letra N sobre la palma de la mano' },
    { id: 8, videoSrc: 'assets/videoimg_abecedario/colores/rojo.mp4', imageSrc: 'assets/img/colores/rojo.png', title: 'Rojo', instruction: 'Forma una R con la mano dominante.Coloca la mano frente a los labios.Realiza un movimiento de ganchito o de vaivén con el dedo índice y medio en los labios.' },
    { id: 9, videoSrc: 'assets/videoimg_abecedario/colores/rosa.mp4', imageSrc: 'assets/img/colores/rosa.png', title: 'Rosa', instruction: 'Forma una R con la mano dominante.Coloca la mano frente a ti, con la palma hacia arriba.Desliza el dedo índice y medio en forma de R por la palma de la otra mano.' },
    { id: 10, videoSrc: 'assets/videoimg_abecedario/colores/verde.mp4', imageSrc: 'assets/img/colores/verde.png', title:'Verde',instruction:'Forma una V con la mano dominante.Coloca la mano frente a ti, con la palma hacia arriba.Desliza la mano en forma de V sobre la palma de la otra mano.' },
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
    console.log('Navigating to /ejercicios-color');
    this.router.navigate(['/ejercicios-color']);
  }
}

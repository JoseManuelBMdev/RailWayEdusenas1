import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abcsec4',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abcsec4.component.html',
  styleUrls: ['./abcsec4.component.css']
})
export class Abcsec4Component {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  
  pages = [
    { id: 1, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrau.jpg', imageSrc: 'assets/img/abc/UVA.png', title: 'U', instruction: 'La letra U se forma extendiendo el dedo índice y el dedo medio, con los otros dedos cerrados con la palma viendo al frente.' },
    { id: 2, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrav.jpg', imageSrc: 'assets/img/abc/VACA.png', title: 'V', instruction: 'La letra V se hace extendiendo el dedo índice y el dedo medio en forma de "V", con los otros dedos cerrados con la palma viendo al frente.' },
    { id: 3, imageSrc1: 'assets/videoimg_abecedario/abecedario/letraw.jpg', imageSrc: 'assets/img/abc/WAFLE.png', title: 'W', instruction: 'Para la letra W, extiende el dedo índice, el dedo medio y el dedo anular, con el pulgar y el meñique cerrados con la palma viendo al frente.' },
    { id: 4, imageSrc1: 'assets/videoimg_abecedario/abecedario/letrax.jpg',imageSrc: 'assets/img/abc/XILOFONO.png', title: 'X', instruction: 'Para la letra W, extiende el dedo índice, el dedo medio y el dedo anular, con el pulgar y el meñique.' },
    { id: 5, imageSrc1: 'assets/videoimg_abecedario/abecedario/letray.jpg', imageSrc: 'assets/img/abc/YOYO.png', title: 'Y', instruction: 'para la letra Y, extiende el pulgar y el meñique, con los otros dedos cerrados.' },
    { id: 6, videoSrc: 'assets/videoimg_abecedario/abecedario/letraz.mp4', imageSrc: 'assets/img/abc/ZORRO.png', title: 'Z', instruction: 'Para la letra Z, extiende el dedo índice y dibuja una "Z" en el aire.' },    
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
    console.log('Navigating to /ejercicios-abcsec1');
    this.router.navigate(['/ejercicios-abcsec1']);
  }
}

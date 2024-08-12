import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ejercicios-color.component.html',
  styleUrls: ['./ejercicios-color.component.css']
})
export class EjerciciosColorComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  pages = [
    {
      id: 1,
      videoSrc: 'assets/videoimg_abecedario/colores/amarillo.mp4',
      question: '¿Qué color es?',
      options: [
        { text: 'Amarillo', isCorrect: true },
        { text: 'Azul', isCorrect: false },
        { text: 'Blanco', isCorrect: false },
        { text: 'Rojo', isCorrect: false }
      ],
      correctAnswer: 'Amarillo',
      isMultipleChoice: true
    },
    {
      id: 2,
      videoSrc: 'assets/videoimg_abecedario/colores/rojo.mp4',
      question: '¿Qué color es?',
      options: [
        { text: 'Amarillo', isCorrect: false },
        { text: 'Azul', isCorrect: false },
        { text: 'Blanco', isCorrect: false },
        { text: 'Rojo', isCorrect: true }
      ],
      correctAnswer: 'Rojo',
      isMultipleChoice: true
    },
    {
      id: 3,
      videoSrc: 'assets/videoimg_abecedario/colores/blanco.mp4',
      question: '¿Qué color es?',
      options: [
        { text: 'Amarillo', isCorrect: false },
        { text: 'Azul', isCorrect: false },
        { text: 'Blanco', isCorrect: true },
        { text: 'Rojo', isCorrect: false }
      ],
      correctAnswer: 'Blanco',
      isMultipleChoice: true
    },
    {
      id: 4,
      videoSrc: 'assets/videoimg_abecedario/colores/naranja.mp4',
      question: 'Escribe que seña se realiza en el video:',
      type: 'text',
      correctAnswer: 'naranja'
    },
    {
      id: 5,
      videoSrc: 'assets/videoimg_abecedario/colores/azul.mp4',
      question: '¿Qué color es?',
      options: [
        { text: 'Amarillo', isCorrect: false },
        { text: 'Azul', isCorrect: true },
        { text: 'Blanco', isCorrect: false },
        { text: 'Rojo', isCorrect: false }
      ],
      correctAnswer: 'Azul',
      isMultipleChoice: true
    },
    {
      id: 6,
      videoSrc: 'assets/videoimg_abecedario/colores/negro.mp4',
      question: '¿Qué color es?',
      options: [
        { text: 'Amarillo', isCorrect: false },
        { text: 'Negro', isCorrect: true },
        { text: 'Blanco', isCorrect: false },
        { text: 'Rojo', isCorrect: false }
      ],
      correctAnswer: 'Negro',
      isMultipleChoice: true
    },
    {
      id: 7,
      videoSrc: 'assets/videoimg_abecedario/colores/morado.mp4',
      question: 'Escribe que seña se realiza en el video:',
      type: 'text',
      correctAnswer: 'morado'
    }
  ];

  currentPage = 0;
  progressWidth = '0%';
  selectedOption: any = null;
  userInput: string = '';
  correctAnswers = 0;
  incorrectAnswers = 0;
  isCorrectAnswer: boolean | null = null;
  submitted: boolean = false;
  buttonState: 'default' | 'correct' | 'incorrect' = 'default';
  inputBorderColor: string = 'gray';

  constructor(
    private cdr: ChangeDetectorRef,
    private router: Router // Inyecta el servicio Router
  ) {}

  ngOnInit() {
    this.updateProgress();
  }

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.updateProgress();
      this.cdr.detectChanges();
      this.selectedOption = null;
      this.userInput = '';
      this.buttonState = 'default';
      this.inputBorderColor = 'gray';
      this.submitted = false;

      if (this.videoPlayer && this.currentPageData.videoSrc) {
        const videoElement = this.videoPlayer.nativeElement;
        videoElement.load();
        videoElement.play();
      }
    } else {
      this.currentPage = -1;
      this.updateProgress();
      console.log('Cambiando de ejercicio');
      this.resetAnswerState();
      this.inputBorderColor = 'gray';
    }
  }

  resetAnswerState() {
    this.isCorrectAnswer = null;
    this.userInput = '';
    this.submitted = false;
  }

  selectOption(option: any) {
    if (this.selectedOption === null && !this.submitted) {
      this.selectedOption = option;
      if (option.isCorrect) {
        this.correctAnswers++;
      } else {
        this.incorrectAnswers++;
      }
    }
  }

  submitAnswer() {
    if (this.userInput && this.currentPageData.correctAnswer) {
      this.isCorrectAnswer = this.userInput.toLowerCase() === this.currentPageData.correctAnswer.toLowerCase();
      if (this.isCorrectAnswer) {
        this.correctAnswers++;
        this.buttonState = 'correct';
        this.inputBorderColor = '#39D57F';
      } else {
        this.incorrectAnswers++;
        this.buttonState = 'incorrect';
        this.inputBorderColor = '#eb5343';
      }
      this.submitted = true;
    }
  }

  isFinalPage() {
    return this.currentPage === -1;
  }

  restart() {
    this.currentPage = 0;
    this.pages = this.shuffleArray(this.pages);
    this.updateProgress();
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    this.selectedOption = null;
    this.userInput = '';
    this.buttonState = 'default';
    this.inputBorderColor = 'gray';
    this.submitted = false;
  }

  nextLesson() {
    console.log('Navigating to /integrantesfamilia');
    this.router.navigate(['/integrantesfamilia']);
  }

  updateProgress() {
    const progressPercentage = ((this.currentPage + 1) / this.pages.length) * 100;
    this.progressWidth = `${progressPercentage}%`;
  }

  private shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  get currentPageData() {
    return this.pages[this.currentPage];
  }

  get isMultipleChoice() {
    return this.currentPageData.isMultipleChoice;
  }
}

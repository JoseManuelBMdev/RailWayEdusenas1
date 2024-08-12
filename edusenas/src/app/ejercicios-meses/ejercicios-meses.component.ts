// TypeScript
import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router'; // Importa Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejerciciosmeses',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ejercicios-meses.component.html',
  styleUrls: ['./ejercicios-meses.component.css']
})
export class EjerciciosMesesComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

    pages = [
      {
        id: 1, 
        videoSrc: 'assets/videoimg_abecedario/meses/agosto.mp4', 
        question: '¿Qué mes es?',
        options: [
          { text: 'Abril', isCorrect: true },
          { text: 'Mayo', isCorrect: false },
          { text: 'Junio', isCorrect: false },
          { text: 'Agosto', isCorrect: false }
        ],
        correctAnswer: 'Abril',
        isMultipleChoice: true // Indica que es una opción múltiple
      },
      {
        id: 2, 
        videoSrc: 'assets/videoimg_abecedario/meses/enero.mp4', 
        question: '¿Qué mes es?',
        options: [
          { text: 'Marzo', isCorrect: false },
          { text: 'Julio', isCorrect: false },
          { text: 'Septiembre', isCorrect: false },
          { text: 'Enero', isCorrect: true }
        ],
        correctAnswer: 'Enero',
        isMultipleChoice: true 
      },
      {
        id: 3, 
        videoSrc: 'assets/videoimg_abecedario/meses/junio.mp4', 
        question: '¿Qué mes es?',
        options: [
          { text: 'Julio', isCorrect: false },
          { text: 'Junio', isCorrect: true},
          { text: 'Febrero', isCorrect: false },
          { text: 'Marzo', isCorrect: false}
        ],
        correctAnswer: 'Junio',
        isMultipleChoice: true 
        
      },
      {
        id: 4,
        videoSrc: 'assets/videoimg_abecedario/meses/diciembre.mp4',
        question: 'Escribe  que seña se realiza en el video:',
        type: 'text',
        correctAnswer: 'diciembre'
      
      },
      {
        id: 5, 
        videoSrc: 'assets/videoimg_abecedario/meses/febrero.mp4', 
        question: '¿Qué mes es?',
        options: [
          { text: 'Enero', isCorrect: false },
          { text: 'Mayo', isCorrect: false },
          { text: 'Octubre', isCorrect: false },
          { text: 'Febrero', isCorrect: true}
        ],
        correctAnswer: 'febrero',
        isMultipleChoice: true 
        
      },{
        id: 6, 
        videoSrc: 'assets/videoimg_abecedario/meses/septiembre.mp4', 
        question: '¿Qué mes es?',
        options: [
          { text: 'Marzo', isCorrect: false },
          { text: 'Septiembre', isCorrect: true},
          { text: 'Abril', isCorrect: false },
          { text: 'Julio', isCorrect: false }
        ],
        correctAnswer: 'Septiembre',
        isMultipleChoice: true 
        
      },
  
      {
        id: 7,
        videoSrc: 'assets/videoimg_abecedario/meses/octubre.mp4',
        question: 'Escribe  que seña se realiza en el video:',
        type: 'text',
        correctAnswer: 'octubre'
      
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

  constructor(private cdr: ChangeDetectorRef, private router: Router) {} // Agrega Router al constructor

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
    console.log('Navigating to /preguntas');
    this.router.navigate(['/preguntas']); // Usa Router para la navegación
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
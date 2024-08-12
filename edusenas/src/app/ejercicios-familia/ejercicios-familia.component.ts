import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // Importa Router
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejerciciosfamilia',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ejercicios-familia.component.html',
  styleUrls: ['./ejercicios-familia.component.css']
})
export class EjerciciosFamiliaComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  pages = [
    {
      id: 1, 
      videoSrc: 'assets/videoimg_abecedario/familia/mama.mp4', 
      question: '¿Qué integrante es?',
      options: [
        { text: 'Hermana', isCorrect: false },
        { text: 'Hermano', isCorrect: false },
        { text: 'Mamá', isCorrect: true },
        { text: 'Papá', isCorrect: false }
      ],
      correctAnswer: 'Mamá',
      isMultipleChoice: true
    },
    {
      id: 2, 
      videoSrc: 'assets/videoimg_abecedario/familia/hermano.mp4', 
      question: '¿Qué integrante es?',
      options: [
        { text: 'Hijo', isCorrect: false },
        { text: 'Tío', isCorrect: false },
        { text: 'Tía', isCorrect: false },
        { text: 'Hermano', isCorrect: true }
      ],
      correctAnswer: 'Hermano',
      isMultipleChoice: true 
    },
    {
      id: 3, 
      videoSrc: 'assets/videoimg_abecedario/familia/tia.mp4', 
      question: '¿Qué integrante es?',
      options: [
        { text: 'Hermano', isCorrect: false },
        { text: 'Hija', isCorrect: false },
        { text: 'Papá', isCorrect: false },
        { text: 'Tía', isCorrect: true }
      ],
      correctAnswer: 'Tía',
      isMultipleChoice: true 
    },
    {
      id: 4,
      videoSrc: 'assets/videoimg_abecedario/familia/hija.mp4',
      question: 'Escribe qué seña se realiza en el video:',
      type: 'text',
      correctAnswer: 'hija'
    },
    {
      id: 5, 
      videoSrc: 'assets/videoimg_abecedario/familia/hermana.mp4', 
      question: '¿Qué integrante es?',
      options: [
        { text: 'Mamá', isCorrect: false },
        { text: 'Hijo', isCorrect: false },
        { text: 'Hermana', isCorrect: true },
        { text: 'Papá', isCorrect: false }
      ],
      correctAnswer: 'Hermana',
      isMultipleChoice: true 
    },
    {
      id: 6, 
      videoSrc: 'assets/videoimg_abecedario/familia/tio.mp4', 
      question: '¿Qué integrante es?',
      options: [
        { text: 'Tío', isCorrect: true },
        { text: 'Hermana', isCorrect: false },
        { text: 'Hermano', isCorrect: false },
        { text: 'Tía', isCorrect: false }
      ],
      correctAnswer: 'Tío',
      isMultipleChoice: true 
    },
    {
      id: 7,
      videoSrc: 'assets/videoimg_abecedario/familia/hijo.mp4',
      question: 'Escribe qué seña se realiza en el video:',
      type: 'text',
      correctAnswer: 'hijo'
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
    console.log('Navigating to /meses');
    this.router.navigate(['/meses']); // Usa Router para la navegación
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

// TypeScript
import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ejercicios-preguntas.component.html',
  styleUrls: ['./ejercicios-preguntas.component.css']
})
export class EjerciciosPreguntasComponent implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

    pages = [
      {
        id: 1, 
        videoSrc: 'assets/img/preguntas/Cuando.png', 
        question: '¿Qué cuestionamineto es??',
        options: [
          { text: '¿Cuándo?', isCorrect: true },
          { text: '¿Qué es?', isCorrect: false },
          { text: '¿Dónde?', isCorrect: false },
          { text: '¿Por qué?', isCorrect: false }
        ],
        correctAnswer: '¿Cuándo?',
        isMultipleChoice: true // Indica que es una opción múltiple
      },
      {
        id: 2, 
        videoSrc: 'assets/videoimg_abecedario/cuestionamientos/porque.mp4', 
        question: '¿Qué cuestionamiento es?',
        options: [
          { text: '¿Cuándo?', isCorrect: false },
          { text: '¿Dónde?', isCorrect: false },
          { text: '¿Qué es?', isCorrect: false },
          { text: '¿Por qué?', isCorrect: true }
        ],
        correctAnswer: '¿Por qué?',
        isMultipleChoice: true 
      },
      {
        id: 3, 
        videoSrc: 'assets/videoimg_abecedario/cuestionamientos/quien.mp4', 
        question: '¿Qué cuestionamineto es?',
        options: [
          { text: '¿Cómo?', isCorrect: false },
          { text: '¿Cúal?', isCorrect: false },
          { text: '¿Quién?', isCorrect: true },
          { text: '¿Dónde?', isCorrect: false }
        ],
        correctAnswer: '¿Quién?',
        isMultipleChoice: true 
        
      },
      {
        id: 4,
        videoSrc: 'assets/videoimg_abecedario/cuestionamientos/quees.mp4',
        question: 'Escribe que seña se realiza en el video:',
        type: 'text',
        correctAnswer: '¿Qué es?'
      
      },
      {
        id: 5, 
        videoSrc: 'assets/videoimg_abecedario/cuestionamientos/donde.mp4', 
        question: '¿Qué cuestionamiento es?',
        options: [
          { text: '¿Por qué?', isCorrect: false },
          { text: '¿Dónde?', isCorrect: true },
          { text: '¿Qué es?', isCorrect: false },
          { text: '¿Quién?', isCorrect: false }
        ],
        correctAnswer: '¿Dónde?',
        isMultipleChoice: true 
        
      },{
        id: 6, 
        videoSrc: 'assets/videoimg_abecedario/cuestionamientos/como.mp4', 
        question: '¿Qué cuestionamineto es?',
        options: [
          { text: '¿Por qué?', isCorrect: false },
          { text: '¿Cómo?', isCorrect: true },
          { text: '¿Dónde?', isCorrect: false },
          { text: '¿Cúal?', isCorrect: false }
        ],
        correctAnswer: '¿Cómo?',
        isMultipleChoice: true 
        
      },
  
      {
        id: 7,
        videoSrc: 'assets/videoimg_abecedario/cuestionamientos/quien.mp4',
        question: 'Escribe  que seña se realiza en el video:',
        type: 'text',
        correctAnswer: '¿Quién?'
      
      }
  
  ];

  currentPage = 0;
  progressWidth = '0%';
  selectedOption: any = null;
  userInput: string = '';
  correctAnswers = 0;
  incorrectAnswers = 0;
  isCorrectAnswer: boolean | null = null;
  submitted: boolean = false; // Estado del envío de respuesta
  buttonState: 'default' | 'correct' | 'incorrect' = 'default';
  inputBorderColor: string = 'gray'; // Define el color del borde

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateProgress();
  }

  nextPage() {
    if (this.currentPage < this.pages.length - 1) {
      this.currentPage++;
      this.updateProgress();
      this.cdr.detectChanges(); // Fuerza la detección de cambios
      this.selectedOption = null;
      this.userInput = '';
      this.buttonState = 'default'; // Resetear estado del botón
      this.inputBorderColor = 'gray'; // Reiniciar color del borde
      this.submitted = false; // Restablecer estado de envío

      // Cargar y reproducir el video si existe en la página actual
      if (this.videoPlayer && this.currentPageData.videoSrc) {
        const videoElement = this.videoPlayer.nativeElement;
        videoElement.load();
        videoElement.play();
      }
    } else {
      // Ir a la página final
      this.currentPage = -1; // Valor especial para la página final
      this.updateProgress();
      console.log('Cambiando de ejercicio');
      this.resetAnswerState(); // Llama a un método para restablecer el estado de la respuesta
      this.inputBorderColor = 'gray'; // Restablece el color del borde
    }
  }

  resetAnswerState() {
    this.isCorrectAnswer = null; // Restablece la verificación de respuesta
    this.userInput = ''; // Borra la respuesta del usuario
    this.submitted = false; // Marca que no se ha enviado la respuesta aún
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
        this.buttonState = 'correct'; // Establecer estado de botón correcto
        this.inputBorderColor = '#39D57F'; // Establecer color del borde para respuesta correcta
      } else {
        this.incorrectAnswers++;
        this.buttonState = 'incorrect'; // Establecer estado de botón incorrecto
        this.inputBorderColor = '#eb5343'; // Establecer color del borde para respuesta incorrecta
      }
      this.submitted = true; // Marcar que la respuesta ha sido enviada
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
    this.buttonState = 'default'; // Resetear estado del botón
    this.inputBorderColor = 'gray'; // Reiniciar color del borde
    this.submitted = false; // Restablecer estado de envío
  }

  nextLesson() {
    // Implementar lógica para la siguiente lección
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

import { Component, ViewChild, ElementRef, ChangeDetectorRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Importar Router
import { FormsModule } from '@angular/forms';

interface Page {
  id: number;
  videoSrc: string;
  imageSrc?: string; // Agregado para la propiedad de imagen
}

@Component({
  selector: 'app-ejerciciosabcsec3',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './ejercicios-abcsec3.component.html',
  styleUrls: ['./ejercicios-abcsec3.component.css']
})
export class EjerciciosAbcsec3Component implements OnInit {
  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;
  pages = [
    {
      id: 5, 
      imageSrc: 'assets/videoimg_abecedario/abecedario/letran.jpg', 
      question: '¿Qué letra es?',
      options: [
        { text: 'M', isCorrect: false },
        { text: 'N', isCorrect: true},
        { text: 'H', isCorrect: false },
        { text: 'P', isCorrect: false }
      ],
      correctAnswer: 'N',
      isMultipleChoice: true // Indica que es una opción múltiple
    },
    {
      id: 2, 
      imageSrc: 'assets/videoimg_abecedario/abecedario/letrat.jpg', 
      question: '¿Qué letra es?',
      options: [
        { text: 'N', isCorrect: false },
        { text: 'H', isCorrect: false },
        { text: 'T', isCorrect: true },
        { text: 'M', isCorrect: false }
      ],
      correctAnswer: 'T',
      isMultipleChoice: true 
    },
    {
      id: 3, 
      imageSrc: 'assets/videoimg_abecedario/abecedario/letrao.jpg', 
      question: '¿Qué letra es?',
      options: [
        { text: 'B', isCorrect: false },
        { text: 'O', isCorrect: true },
        { text: 'H', isCorrect: false },
        { text: 'I', isCorrect: false }
      ],
      correctAnswer: 'O',
      isMultipleChoice: true 
    },
    {
      id: 4,
      imageSrc: 'assets/videoimg_abecedario/abecedario/letras.jpg',
      question: 'Escribe qué seña se realiza en el video:',
      type: 'text',
      correctAnswer: 's'
    },
    
    {
      id: 1, 
      imageSrc: 'assets/videoimg_abecedario/abecedario/letrar.jpg', 
      question: '¿Qué letra es?',
      options: [
        { text: 'P', isCorrect: false },
        { text: 'T', isCorrect: false },
        { text: 'R', isCorrect: true },
        { text: 'O', isCorrect: false }
      ],
      correctAnswer: 'R',
      isMultipleChoice: true 
    },
  
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

  constructor(private cdr: ChangeDetectorRef, private router: Router) {} // Inyección del Router

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
      if (this.videoPlayer && this.currentPageData.imageSrc) {
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
    console.log('Navigating to /abcseccion4');
    this.router.navigate(['/abcseccion4']);
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

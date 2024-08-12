import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-camara',
  standalone: true,
  imports: [],
  templateUrl: './camara.component.html',
  styleUrl: './camara.component.css'
})
export class CamaraComponent {
  @ViewChild('videoElement', { static: true }) videoElement!: ElementRef;
  @ViewChild('canvasElement', { static: true }) canvasElement!: ElementRef;
  randomPercentage: number;

  private stream: MediaStream | null = null;

  constructor(private http:HttpClient){ 
    this.randomPercentage = 0; 
  }

  ngOnInit(): void {
    this.requestCameraPermissions();
  }

  predecir(){
    this.randomPercentage = Math.floor(Math.random() * 21) + 70;
  }

  clean(){
    this.randomPercentage = Math.floor(Math.random() * 6) + 5;
  }

  async requestCameraPermissions() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      
      this.videoElement.nativeElement.srcObject = stream;
    } catch (error) {
      console.error('Error al solicitar permisos de cámara:', error);
      
    }
  }

  stopCamera() {
    //console.log(this.stream);
      this.videoElement.nativeElement.srcObject = null;
    if (this.stream) {
      console.log('vfdf');
      
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
      this.videoElement.nativeElement.srcObject = '';
    }
  }

  capturePhoto() {
    const context = this.canvasElement.nativeElement.getContext('2d');
    context.drawImage(this.videoElement.nativeElement, 0, 0, this.canvasElement.nativeElement.width, this.canvasElement.nativeElement.height);

    // Obtén la imagen como base64
    const photoDataUrl = this.canvasElement.nativeElement.toDataURL('image/jpeg');

    // Muestra la imagen en la página (puedes usar una <img> o cualquier otro elemento)
    const imgElement = document.createElement('img');
    imgElement.src = photoDataUrl;
    //document.body.appendChild(imgElement);

    /*const formData = new FormData();
    formData.append('firstName', 'f1'); // Datos adicionales
    formData.append('lastName', 'l1')*/ // Más datos adicionales
    //formData.append('imgFile', event.target.files[0]);
    var formData = {
      'firstName': "Julio",
      "lastName": "Tep",
      "img": "img"
    }

    this.http.post('http://127.0.0.1:5000/api/v1/modelo', formData)
        .subscribe({
          next: data => {
            
              console.log('Éxito:', data);
              //this.router.navigate(['/menu']);
          },
          error: err => {
            console.error('Error:', err);
            //this.errore = true
          
          }
        });
  }

}

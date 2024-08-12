import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {


  selectedFile: File | null = null;
  prediction: string | null = null;
  error: string | null = null;

  constructor(private http:HttpClient){ 

  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
    const formData = new FormData();
    formData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('http://127.0.0.1:5000/api/v1/modelo', formData)
        .subscribe({
          next: data => {
            this.prediction = `Label: , Confidence: ${data}`;
            this.error = null;
          },
          
          error: err => {
            this.error = err;
            this.prediction = null;
          }
        });
      }
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contact="Constantly, my inbox is accessible. Should you have any inquiries or simply wish to extend a greeting, please feel free to leave a message. I will make every effort to respond to you as soon as possible. Please contact me via email regarding any applicable employment prospects.";
  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    const formData = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message
    };

    this.http.post('/api/contact', formData).subscribe(
      response => {
        console.log('Email sent successfully!', response);
      },
      error => {
        console.error('Error sending email', error);
      }
    );
  }

 }


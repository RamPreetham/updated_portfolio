import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contact="Constantly, my inbox is accessible. Should you have any inquiries or simply wish to extend a greeting, please feel free to leave a message. I will make every effort to respond to you as soon as possible. Please contact me via email regarding any applicable employment prospects.";



  onSubmit(): void {

    }
  }

import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  heading= "Some of My Notable Works..";
  projects = [
    {
      name: 'Apex-Gaming Trade Website',
      url: 'https://github.com/RamPreetham/GamingWebsite',
      image: '../../assets/images/Apex_gaming.jpg'
    },
    {
      name: 'Appointment Management',
      url: 'https://github.com/RamPreetham/AppointmentManagementSystem',
      image: '../../assets/images/Appointment_System.jpg'
    },
    {
      name: 'Tableau Dashboards',
      url: 'https://github.com/RamPreetham/Tableau_Visualization',
      image: '../../assets/images/Tableau_Dashboards.jpg'
    },
    {
      name: 'PSD_to_HTML',
      url: 'https://github.com/RamPreetham/Expanding_cards',
      image: '../../assets/images/PSD-to-HTML-Using-Bootstrap.jpg'

    },
    {
      name: 'Ecommerce-Website_Scripts',
      url: 'https://github.com/RamPreetham/Ecommerce-Website-Scripts',
      image: '../../assets/images/SQL.jpg'

    },
    {
      name: 'Portfolio',
      url: 'https://github.com/username/project3',
      image: '../../assets/images/portfolio.jpg'

    }
  ];
  constructor() { }

  ngOnInit(): void {
    // Fetch projects data from API or other data source
    // this.http.get('url-to-fetch-projects').subscribe(projects => this.projects = projects);
  }

}

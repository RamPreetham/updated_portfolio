import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {

  heading = "Experienced Full Stack Developer Crafting Innovative Solutions for the Digital Age.."
  experiences = [
    {
      company: 'Mckesson',
      position: 'Java AWS Developer',
      duration: 'June 2023 - Feb 2024',
      details: 'Impact driving force behind the development of a cutting-edge JavaScript framework, serving as a robust wrapper over jQuery and AJAX to streamline UI configuration widgets. Managed critical operational tasks and addressed on-demand support requests from tenant applications, safeguarding against any mission-critical application outages stemming from the workflow engine. Worked collaboratively with Business Analysts and Quality Assurance professionals in analyzing requirements from existing documentation, including liaising with 6 architects to design and implement tailored technical cloud solutions. Crafted J2EE backend code and executed comprehensive unit tests, ensuring alignment with specified acceptance criteria and compliance requirements.'
    },
    {
      company: 'HSIC',
      position: 'Java/J2EE Developer',
      duration: 'Dec 2022 - May 2023',
      details: 'Played a vital role in ensuring seamless deployment by maintaining and elevating the efficiency of the automated build and deployment process for applications. Worked closely with a dynamic team of 8 engineers, actively participating in all aspects from sprint planning to code shipping. Employed IntelliJ IDEA to meticulously debug and optimize code, resulting in an impressive 42% reduction in turnaround time. Engaged in daily mentoring sessions with 2 senior developers, actively contributing to weekly stand-up meetings.'
    },
    {
      company: 'Accenture',
      position: 'Application Development Analyst',
      duration: 'May 2020 - Dec 2021',
      details: 'Catalyzed positive changes by leveraging AWS CLI to establish scalability for application servers, administering the AWS DNS system through Route53, and efficiently managing users and groups using Amazon Identity and Access Management (IAM). Integrated social media plugins seamlessly into the website using Angular, dynamically updating the homepage with daily news feeds through newsfeed APIs. Engineered responsive chatbot APIs complete with authentication and authorization mechanisms. Instituted and executed automated unit testing frameworks, resulting in a substantial monthly time savings of 8-man hours.'
    },
    {
      company: 'Accenture',
      position: 'Full Stack Developer Associate',
      duration: 'May 2019 - May 2020',
      details: 'Recruited to design, develop, and rigorously test HTML5, CSS, and jQuery components that adhere to web browser accessibility standards, while executing the MEAN stack architecture (AngularJS, Express, Node.js, MongoDB) for cutting-edge web applications. Implemented robust Transaction History, Payment details, and Saved-cards APIs using the Spring MVC Framework and J2EE, ensuring seamless functionality. Utilized JavaScript to validate user inputs, dynamically manipulate HTML elements, and create reusable external JavaScript modules, enhancing functionality across multiple web pages.'
    }
  ];

  showContent: boolean[] = Array.from({ length: this.experiences.length }, () => true);

  toggleContent(index: number):void {
    this.showContent[index] = !this.showContent[index];
  }

}

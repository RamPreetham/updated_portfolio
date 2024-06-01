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
      company: 'Outlier',
      position: 'AI Code Expert',
      duration: 'Jan 2024 - Present',
      details: 'As a versatile software developer, I excel in solving complex coding challenges by developing functional and optimized code across multiple programming languages, including Python, Java, JavaScript, SQL, C/C++, and HTML/CSS. I focus on optimizing code for maximum performance and efficiency while ensuring reliability through robust test cases. My expertise extends to crafting high-quality generative prompts for AI model inputs, utilizing advanced generative AI techniques. I specialize in utilizing and fine-tuning Large Language Models (LLMs) to enhance the quality and relevance of generated code responses. This involves a rigorous assessment of AI-generated code, including human-readable summaries and output predictions, to ensure accuracy and effectiveness.My responsibilities encompass developing efficient algorithms, optimizing system performance, and leveraging AI technologies to improve response quality. My work ensures that AI-generated solutions are not only technically sound but also practical and reliable for real-world applications.'
    },
    {
      company: 'Eranova AI',
      position: 'Software Developer',
      duration: 'Mar 2024 - May 2024',
      details: 'As a seasoned web application developer, I excel in creating dynamic and responsive web applications utilizing the Django framework, along with HTML, CSS, and JavaScript. My expertise includes developing and implementing Ajax functions to enable dynamic and interactive web experiences.I have architected and designed a sophisticated SharePoint Syncing application, leveraging AWS components such as S3 for scalable storage, AWS Lambda for serverless computing, and Autoscaling for dynamic resource management. My role also involved managing the migration of applications from Azure to AWS, ensuring seamless transitions with optimized performance and minimal downtime.In addition to cloud-based application development, I have implemented advanced data warehousing solutions using Snowflake, designing and managing various schemas to support the Eranova project. This project utilizes Large Language Models (LLMs) for efficient and accurate structured and unstructured data searches. My contributions have significantly enhanced data retrieval capabilities and overall system performance, showcasing my ability to handle complex, large-scale technical projects.'
    },
    {
      company: 'Mckesson',
      position: 'Java AWS Developer',
      duration: 'June 2023 - Feb 2024',
      details: 'Impact driving force behind the development of a cutting-edge JavaScript framework, serving as a robust wrapper over jQuery and AJAX to streamline UI configuration widgets. Managed critical operational tasks and addressed on-demand support requests from tenant applications, safeguarding against any mission-critical application outages stemming from the workflow engine. Worked collaboratively with Business Analysts and Quality Assurance professionals in analyzing requirements from existing documentation, including liaising with 6 architects to design and implement tailored technical cloud solutions. Crafted J2EE backend code and executed comprehensive unit tests, ensuring alignment with specified acceptance criteria and compliance requirements.'
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

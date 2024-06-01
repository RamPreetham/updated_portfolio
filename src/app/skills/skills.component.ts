import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface FrontendSkill{
  name:String;
  experience:String;
}

interface BackendSkill{
  name:String;
  experience:String;
}

interface Tools{
  name:String;
  experience:String;
}
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})


export class SkillsComponent {

  skill_heading="These are my major skills and tools that I have been  working with..";
  frontendskills: FrontendSkill[] = [
    {name:'HTML' , experience:'Experienced'},
    {name:'CSS' , experience:'Experienced'},
    {name:'JavaScript' , experience:'Intermediate'},
    {name:'Angular' , experience:'Experienced'},
    {name:'React JS' , experience:'Intermediate'},
    {name:'TypeScript' , experience:'Experienced'},
    {name:'Next JS' , experience:'Beginner'},
    {name:'Bootstrap' , experience:'Experienced'}
  ];

  Backendskills : BackendSkill[] = [
    {name:'Java' , experience:'Experienced'},
    {name:'SpringBoot' , experience:'Experienced'},
    {name:'Node JS' , experience:'Experienced'},
    {name:'Express JS' , experience:'Intermediate'},
    {name:'MYSQL' , experience:'Experienced'},
    {name:'MongoDB' , experience:'Experienced'},
    {name:'Redis Cache' , experience:'Intermediate'},
    {name:'Python' , experience:'Intermediate'}

  ];

  Tools : Tools[] = [
    {name:'AWS' , experience:'Intermediate'},
    {name:'Azure' , experience:'Experienced'},
    {name:'VSCode' , experience:'Experienced'},
    {name:'Eclipse' , experience:'Experienced'},
    {name:'GIT' , experience:'Intermediate'},
    {name:'Jira' , experience:'Intermediate'},
    {name:'Docker' , experience:'Experienced'},
    {name:'Kubernetes' , experience:'Experienced'}
  ];



}

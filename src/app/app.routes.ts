import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';


export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'skills', component: SkillsComponent},
];

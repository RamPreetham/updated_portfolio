import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contact/contact.component";
import { SkillsComponent } from './skills/skills.component';
import {CopyrightComponent} from './copyright/copyright.component'
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [ RouterModule, AboutComponent, ExperienceComponent, ProjectsComponent, HeaderComponent, ContactComponent, SkillsComponent, CopyrightComponent,HttpClientModule]
})


export class AppComponent  {}

import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Router } from "@angular/router";
import { ViewportScroller } from "@angular/common";
import { AboutComponent } from "./about/about.component";
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, AboutComponent, ExperienceComponent, ProjectsComponent, HeaderComponent, ContactComponent]
})


export class AppComponent  implements OnInit{
  constructor(private scroller: ViewportScroller, private router: Router) {}
  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  gotoAbout(){
    this.scroller.scrollToAnchor("about");

  }
  gotoProjects(){
    this.scroller.scrollToAnchor("projects");
   }

  gotoexperience(){
    this.scroller.scrollToAnchor("experience");
   }

  title = 'updated_portfolio';
  routes =[
    {
      path:''
    }
  ]

}

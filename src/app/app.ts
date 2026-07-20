import { Component } from '@angular/core';

import { Header } from './components/header/header.component';
import { Hero } from './components/hero/hero.component';
import { Experience } from './components/experience/experience.component';
import { Projects } from './components/projects/projects.component';
import { Skills } from './components/skills/skills.component';
import { Education } from './components/education/education.component';
import { Footer } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, 
    Hero, 
    Experience, 
    Projects, 
    Skills, 
    Education, 
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'novo-portfolio';
}
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../../services/language.service';
import { Observable, tap } from 'rxjs';
import { Experience, Position } from '../../../models';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceCardComponent } from '../../cards/experience-card/experience-card.component';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../../services/experience.service';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    HttpClientModule,
    ExperienceCardComponent,
    HomeCarouselComponent,
  ],
  providers: [LanguageService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  languages$: Observable<Array<Experience>> = this.ls.getLanguages();
  constructor(private readonly ls: LanguageService) {}

  ngOnInit(): void {}

  openDocs(): void {
    window.open('http://localhost:3000/api-docs', '_blank');
  }
}

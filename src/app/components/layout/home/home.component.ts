import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../../services/language.service';
import { Observable, tap } from 'rxjs';
import { Experience, Position } from '../../../models';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceCardComponent } from '../../cards/experience-card/experience-card.component';
import { CommonModule } from '@angular/common';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { CodeComponent } from '@component/code/code.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    HttpClientModule,
    ExperienceCardComponent,
    HomeCarouselComponent,
    CodeComponent,
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
    window.open('https://resume.ollietinsley.com/api-docs', '_blank');
  }
}

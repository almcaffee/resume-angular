import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [MenuModule, ButtonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss',
})
export class SectionHeaderComponent {
  @Input() title: string | undefined;

  constructor(private readonly ar: ActivatedRoute) {
    console.log(ar.snapshot);
  }
}

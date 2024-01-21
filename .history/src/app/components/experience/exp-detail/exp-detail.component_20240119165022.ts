import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
@Component({
  selector: 'app-exp-detail',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './exp-detail.component.html',
  styleUrl: './exp-detail.component.scss',
})
export class ExpDetailComponent {}

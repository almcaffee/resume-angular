import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { WebService } from '../../../services/web.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [],
  providers: [MessageService],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss',
})
export class MessageComponent {
  destroy$ = new Subject<void>();

  constructor(
    private readonly ws: WebService,
    private readonly messageService: MessageService,
  ) {
    this.ws.messages$.subscribe((message: any) => {
      this.messageService.add({
        severity: 'success',
        summary: message.summary,
        detail: message.detail,
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { WebService } from '../../../services/web.service';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  providers: [MessageService],
  template: '',
})
export class MessageComponent {
  destroy$ = new Subject<void>();

  constructor(
    private readonly ws: WebService,
    private readonly messageService: MessageService,
  ) {
    // this.ws.messages$
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     tap((message: Message) => {
    //       console.log(message);
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: message.summary,
    //         detail: message.detail,
    //       });
    //     }),
    //   )
    //   .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

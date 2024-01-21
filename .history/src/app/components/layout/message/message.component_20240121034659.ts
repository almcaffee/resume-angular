import { Component } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { Subject, takeUntil, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store, select } from '@ngrx/store';
import { selectToastMessage } from '../../../store/store.selectors';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule],
  providers: [MessageService],
  template: '',
})
export class MessageComponent {
  destroy$ = new Subject<void>();
  message$ = this.store.pipe(select(selectToastMessage()));

  constructor(
    private readonly store: Store,
    private readonly messageService: MessageService,
  ) {
    this.message$
      .pipe(
        takeUntil(this.destroy$),
        tap((message: Message | undefined) => {
          console.log(message);
          message &&
            this.messageService.add({
              severity: 'success',
              summary: message.summary,
              detail: message.detail,
            });
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

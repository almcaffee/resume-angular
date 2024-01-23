import { Component, Input } from '@angular/core';
import { RawContent, WebService } from '@service/web.service';
import { TerminalModule } from 'primeng/terminal';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TabViewModule } from 'primeng/tabview';
import { HighlightModule } from 'ngx-highlightjs';
import { Observable } from 'rxjs';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-code',
  standalone: true,
  imports: [
    CommonModule,
    DialogModule,
    TerminalModule,
    ScrollPanelModule,
    TabViewModule,
    HighlightModule,
    TagModule,
  ],
  templateUrl: './code.component.html',
  styleUrl: './code.component.scss',
})
export class CodeComponent {
  @Input() set contentPaths(paths: Array<string>) {
    this.rawContent$ = this.ws.makeMultipleRawContentRequests(paths);
  }
  rawContent$: Observable<Array<RawContent>> | undefined;
  activeIndex: number = 0;
  visible: boolean = false;
  constructor(private readonly ws: WebService) {}
}

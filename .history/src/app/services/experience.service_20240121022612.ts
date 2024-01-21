import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Bullet, Position } from '../models';
import { Observable, tap } from 'rxjs';
import { Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends WebService {
  constructor(
    override readonly httpClient: HttpClient,
    override readonly messageService: MessageService,
    private readonly store: Store,
  ) {
    super(httpClient, messageService);
  }
  getExperienceList<T>(
    type: string,
    params: Params = {},
  ): Observable<Array<T>> {
    return this.makeGetRequest<Array<T>>(
      `${this.baseUrl}/experience/list/${type}`,
      { params },
    );
  }
  getExperience(id: number): Observable<Position> {
    return this.makeGetRequest<Position>(
      `${this.baseUrl}/experience/${id}`,
    ).pipe(
      tap((data: Position) =>
        this.store.dispatch({ type: 'Set Position', payload: data }),
      ),
    );
  }
  getAllExperience(): Observable<Array<Position>> {
    return this.makeGetRequest<Array<Position>>(
      `${this.baseUrl}/experience`,
    ).pipe(
      tap((data: Array<Position>) =>
        this.store.dispatch({ type: 'Set Positions', payload: data }),
      ),
    );
  }
}

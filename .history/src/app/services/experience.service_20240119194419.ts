import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Bullet, Position } from '../models';
import { Observable } from 'rxjs';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends WebService {
  getExperienceList<T>(
    type: string,
    queryParams: Params = {},
  ): Observable<Array<T>> {
    return this.makeGetRequest<Array<T>>(
      `${this.baseUrl}/experience/list/${type}`,
      { queryParams },
    );
  }
  getExperience(id: number): Observable<Position> {
    return this.makeGetRequest<Position>(`${this.baseUrl}/experience/${id}`);
  }
  getAllExperience(): Observable<Array<Position>> {
    return this.makeGetRequest<Array<Position>>(`${this.baseUrl}/experience`);
  }
}

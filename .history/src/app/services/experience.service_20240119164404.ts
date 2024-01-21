import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Position } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends WebService {
  getLanguage(id: number): Observable<Position> {
    return this.makeGetRequest<Position>(`${this.baseUrl}/languages/${id}`);
  }
  getLanguages(): Observable<Array<Position>> {
    return this.makeGetRequest<Array<Position>>(`${this.baseUrl}/languages`);
  }
}

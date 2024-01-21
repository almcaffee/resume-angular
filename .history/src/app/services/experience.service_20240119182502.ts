import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Position } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService extends WebService {
  getExperienceList(type: string): Observable<Position> {
    return this.makeGetRequest<Position>(
      `${this.baseUrl}/experience/list/${type}`,
    );
  }
  getExperience(id: number): Observable<Position> {
    return this.makeGetRequest<Position>(`${this.baseUrl}/experience/${id}`);
  }
  getAllExperience(): Observable<Array<Position>> {
    return this.makeGetRequest<Array<Position>>(`${this.baseUrl}/experience`);
  }
}

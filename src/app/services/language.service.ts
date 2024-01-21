import { Injectable } from '@angular/core';
import { WebService } from './web.service';
import { Observable, tap } from 'rxjs';
import { Experience } from '../models';

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends WebService {
  getLanguage(id: number): Observable<Experience> {
    return this.makeGetRequest<Experience>(`${this.baseUrl}/languages/${id}`);
  }
  getLanguages(): Observable<Array<Experience>> {
    return this.makeGetRequest<Array<Experience>>(`${this.baseUrl}/languages`);
  }
}

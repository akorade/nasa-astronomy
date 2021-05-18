import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Apod } from '../../shared/models/apod.model';
import { Constants } from '../../config/constants';
import { Helpers } from '../../shared/utils/helpers';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PlanetaryService {

  constructor(private http: HttpClient) { }
  getAstronomyPictureOfDayByDays(numberOfDays: number): Observable<Apod[]> {
    let end_date = new Date();
    let start_date = new Date();
    start_date.setDate(start_date.getDate() - numberOfDays);
    return this.http.get<Apod[]>(`${environment.apiUrl}${Constants.APOD_URI}?api_key=${environment.apiKey}&start_date=${Helpers.formatDate(start_date)}&end_date=${Helpers.formatDate(end_date)}`);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseURL = "https://java-application-349511.uc.r.appspot.com";

  constructor(private httpClient: HttpClient) { }

  getSurveysList(): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(`${this.baseURL}/surveyDetails`);
  }

  createSurvey(survey: Survey): Observable<Object> {
    
    return this.httpClient.post(`${this.baseURL}/saveSurvey`, survey);
  }
}

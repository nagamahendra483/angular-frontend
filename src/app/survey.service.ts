import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { Survey } from './survey';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseURL = "../assets/data/survey-details.json";

  constructor(private httpClient: HttpClient) { }

  getSurveysList(): Observable<Survey[]> {
    return this.httpClient.get<Survey[]>(`${this.baseURL}`);
  }

  createSurvey(survey: Survey): Observable<Object> {
    const surveyDetails: Survey[] = JSON.parse(sessionStorage.getItem("survey-deatils"));
    const finalData: string = JSON.stringify([...surveyDetails,survey]);
    sessionStorage.setItem("survey-deatils", finalData);
    return of(survey);
  }
}

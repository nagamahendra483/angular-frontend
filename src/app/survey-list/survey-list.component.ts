import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey'
import { SurveyService } from '../survey.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey-list',
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {

  surveyDetails: Survey[];

  constructor(private surveyService: SurveyService,
    private router: Router) {
      this.getSurveys();
  }

  ngOnInit(): void {
  }

  private getSurveys() {
    if(!localStorage.getItem("survey-deatils")){
      this.surveyService.getSurveysList().subscribe(data => {
        localStorage.setItem("survey-deatils",JSON.stringify(data));
        this.surveyDetails = JSON.parse(localStorage.getItem("survey-deatils"));
      });
    } else {
      this.surveyDetails = JSON.parse(localStorage.getItem("survey-deatils"));
    } 
  }
}

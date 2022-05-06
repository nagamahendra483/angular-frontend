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
    if(!sessionStorage.getItem("survey-deatils")){
      this.surveyService.getSurveysList().subscribe(data => {
        sessionStorage.setItem("survey-deatils",JSON.stringify(data));
        this.surveyDetails = JSON.parse(sessionStorage.getItem("survey-deatils"));
      });
    } else {
      this.surveyDetails = JSON.parse(sessionStorage.getItem("survey-deatils"));
    } 
  }
}

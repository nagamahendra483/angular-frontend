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
    private router: Router) { }

  ngOnInit(): void {
    this.getSurveys();
  }

  private getSurveys() {
    this.surveyService.getSurveysList().subscribe(data => {
      this.surveyDetails = data;
    });
  }
}

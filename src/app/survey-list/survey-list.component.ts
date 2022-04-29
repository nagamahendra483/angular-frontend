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

  employees: Survey[];

  constructor(private surveyService: SurveyService,
    private router: Router) { }

  ngOnInit(): void {
    this.getSurveys();
  }

  private getSurveys() {
    this.SurveyService.getSurveysList().subscribe(data => {
      this.employees = data;
    });
  }

  SurveyDetails(id: number) {
    this.router.navigate(['survey-details', id]);
  }

  updateSurvey(id: number) {
    this.router.navigate(['update-survey', id]);
  }

  deleteSurvey(id: number) {
    this.surveyService.deleteSurvey(id).subscribe(data => {
      console.log(data);
      this.getSurveys();
    })
  }
}

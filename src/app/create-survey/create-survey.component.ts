import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  survey: Survey = new Survey();
  constructor(private surveyService: SurveyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSurvey() {
    this.surveyService.createSurvey(this.survey).subscribe(data => {
      console.log(data);
      this.goToSurveyList();
    },
      error => console.log(error));
  }

  goToSurveyList() {
    this.router.navigate(['/surveys']);
  }

  onSubmit() {
    console.log(this.survey);
    this.saveSurvey();
  }
}

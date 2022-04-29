import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.css']
})
export class SurveyDetailsComponent implements OnInit {

  id: number
  employee: Survey
  constructor(private route: ActivatedRoute, private surveyService: SurveyService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.survey = new Survey();
    this.surveyService.getById(this.id).subscribe(data => {
      this.survey = data;
    });
  }

}

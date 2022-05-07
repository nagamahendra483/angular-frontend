import { Component, OnInit } from '@angular/core';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {

  survey: Survey = new Survey();
  isSubmitClicked = false;
  listOptions = ["Students","Location","Campus", "Atmosphere","Dorm rooms","Sports"];
  selectedOption: string[] = [];
  constructor(private surveyService: SurveyService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveSurvey() {
    console.log(this.survey)
    this.survey.mostLiked = this.selectedOption;
    this.surveyService.createSurvey(this.survey).subscribe(data => {
      console.log(data);
      this.goToSurveyList();
    },
      error => console.log(error));
  }

  setAsSelected(option: string, isChecked: boolean){
    if(isChecked){
      this.selectedOption.push(option);
    } else  {
      const index = this.selectedOption.indexOf(option);
      this.selectedOption.splice(index,1);
    }
  }

  goToSurveyList() {
    this.router.navigate(['/surveys']);
  }

  onSubmit() {
    this.saveSurvey();
  }

  setClicked(){
    this.isSubmitClicked = true;
  }
}

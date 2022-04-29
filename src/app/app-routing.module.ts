import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { CreateSurveyComponent } from './create-survey/create-employee.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: '', redirectTo: 'surveys', pathMatch: 'full' },
  { path: 'update-survey/:id', component: UpdateSurveyComponent },
  { path: 'survey-details/:id', component: SurveyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

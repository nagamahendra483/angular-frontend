import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: '', redirectTo: 'surveys', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

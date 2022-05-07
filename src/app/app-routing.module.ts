import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VolgenauComponent } from './volgenau-details/volgenau-details.component';

const routes: Routes = [
  { path: 'surveys', component: SurveyListComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'volgenau-details', component: VolgenauComponent },
  { path: '', redirectTo: 'home-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

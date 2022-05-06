import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VolgenauComponent } from './volgenau-details/volgenau-details.component';
import { CSEDeptComponent } from './cse-dept/cse-dept.component';


import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    CreateSurveyComponent,
    HomePageComponent,
    VolgenauComponent,
    CSEDeptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { CreateEmployeeComponent } from './create-survey/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-survey/update-survey.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component'

@NgModule({
  declarations: [
    AppComponent,
    SurveyListComponent,
    CreateSurveyComponent,
    UpdateSurveyComponent,
    SurveyDetailsComponent
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

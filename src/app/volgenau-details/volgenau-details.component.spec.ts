import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolgenauComponent } from './volgenau-details.component';

describe('SurveyListComponent', () => {
  let component: VolgenauComponent;
  let fixture: ComponentFixture<VolgenauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VolgenauComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolgenauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

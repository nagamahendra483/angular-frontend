import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSEDeptComponent } from './cse-dept.component';

describe('SurveyListComponent', () => {
  let component: CSEDeptComponent;
  let fixture: ComponentFixture<CSEDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CSEDeptComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSEDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

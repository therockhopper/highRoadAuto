import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveySliderComponent } from './survey-slider.component';

describe('SurveySliderComponent', () => {
  let component: SurveySliderComponent;
  let fixture: ComponentFixture<SurveySliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveySliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveySliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SurveySliderComponent } from './survey-slider/survey-slider.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
    SurveySliderComponent,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
    SurveySliderComponent,
  ]
})
export class GeneralModule { }

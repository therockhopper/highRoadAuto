import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NavBarComponent,
    FooterComponent,
  ],
  exports: [
    NavBarComponent,
    FooterComponent,
  ]
})
export class GeneralModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ShopComponent
  ],
  exports: [
    ShopComponent
  ]
})
export class InventoryModule { }

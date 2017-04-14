import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

const loginRoutes: Routes = [
  {
    path: 'shop',
    component: ShopComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes),
    CommonModule
  ],
  declarations: [
    ShopComponent,
  ],
  exports: [
    RouterModule,
    ShopComponent,
  ]
})
export class InventoryModule { }

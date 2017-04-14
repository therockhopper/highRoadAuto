import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from 'clarity-angular';
import { RouterModule, Routes } from '@angular/router';
import { InventoryService } from './inventory.service';
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
    ClarityModule.forRoot(),
    CommonModule
  ],
  declarations: [
    ShopComponent,
  ],
  providers: [
    InventoryService,
  ],
  exports: [
    RouterModule,
    ShopComponent,
  ]
})
export class InventoryModule { }

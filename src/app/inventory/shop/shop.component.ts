import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  public inventory: any
  public errorMessage: string

  constructor( public inventoryService: InventoryService ) { }

  ngOnInit() {
    this.getInventory()
  }

  getInventory() {
    this.inventoryService.getInventory()
    .subscribe(
      inventory => this.inventory = inventory,
      error =>  this.errorMessage = <any>error);
  }

}

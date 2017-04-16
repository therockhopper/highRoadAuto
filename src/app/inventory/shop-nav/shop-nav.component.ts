import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-nav',
  templateUrl: './shop-nav.component.html',
  styleUrls: ['./shop-nav.component.scss']
})
export class ShopNavComponent implements OnInit {
  public categoryOpen: boolean

  constructor() {
    this.categoryOpen = false
  }

  ngOnInit() {
  }

}

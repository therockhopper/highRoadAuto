import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNavComponent } from './shop-nav.component';

describe('ShopNavComponent', () => {
  let component: ShopNavComponent;
  let fixture: ComponentFixture<ShopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

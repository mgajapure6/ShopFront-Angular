import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHorizontalSmCardComponent } from './product-horizontal-sm-card.component';

describe('ProductHorizontalSmCardComponent', () => {
  let component: ProductHorizontalSmCardComponent;
  let fixture: ComponentFixture<ProductHorizontalSmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductHorizontalSmCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductHorizontalSmCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

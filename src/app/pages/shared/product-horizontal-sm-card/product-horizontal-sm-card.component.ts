import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-horizontal-sm-card',
  templateUrl: './product-horizontal-sm-card.component.html',
  styleUrls: ['./product-horizontal-sm-card.component.css']
})
export class ProductHorizontalSmCardComponent implements OnInit {

  @Input() product: any;

  constructor() { }

  ngOnInit(): void {
  }

}

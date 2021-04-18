import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pu-add-shopping-cart',
  templateUrl: './add-shopping-cart.component.html',
  styleUrls: ['./add-shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddShoppingCartComponent implements OnInit {
  @Input() quantityInOrder: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}

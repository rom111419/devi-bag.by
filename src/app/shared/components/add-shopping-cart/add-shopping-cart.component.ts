import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { AppService } from "@app/core/services/app.service";
import { IImage } from "@app/core/classes/image.interface";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "pu-add-shopping-cart",
  templateUrl: "./add-shopping-cart.component.html",
  styleUrls: ["./add-shopping-cart.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddShoppingCartComponent implements OnInit {
  @Input() product!: IImage;
  quantity: number | undefined = 0;
  removeFromOrders$: Observable<any> | undefined;

  constructor(public appService: AppService) {
    this.removeFromOrders$ = this.appService.removeFromOrders$.pipe(
      map(() => {
        this.readAppServiceOrders();
      })
    );
  }

  ngOnInit(): void {
    this.readAppServiceOrders();
  }

  addProduct() {
    this.appService.addToBasket(this.product);
    this.readAppServiceOrders();
  }

  readAppServiceOrders() {
    this.quantity = this.appService.orders.filter(image => image.id === this.product.id).length;
  }
}

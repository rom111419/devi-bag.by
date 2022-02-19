import { Injectable } from "@angular/core";
import { IImage } from "../classes/image.interface";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppService {
  sliderImageFileName = "flags_title.jpg";
  orders: IImage[] = [];
  errorText: any;
  summ: number = 0;
  hideForm = false;
  thanks = false;
  addToBasket$: BehaviorSubject<IImage> = new BehaviorSubject<any>(null);
  removeFromOrders$: Subject<number> = new Subject<any>();
  images: IImage[]= [];

  constructor() {
  }

  addToBasket(product: IImage) {
    this.orders.push(product);
    this.summCalculation();
    this.addToBasket$.next(product);
  }

  summCalculation() {
    this.summ = this.orders.reduce((acc, v) => acc + (v.price ? v.price : 0), 0);
  }

  removeFromOrders(idx: number) {
    this.orders = this.orders
      .filter((image, orderIdx) => orderIdx !== idx);
    this.summCalculation();
    this.removeFromOrders$.next(idx);
  }

  clearOrders() {
    this.orders = [];
    this.summCalculation();
  }

  getImage(id: string): IImage | undefined {
    return this.images.find(value => value.id === id);
  }
}

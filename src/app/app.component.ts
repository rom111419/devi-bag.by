import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import { Router, Event } from '@angular/router';
import { IImage } from './shared/classes/image.interface';
import { crudFactoryCreate, crudFactoryRead, ProductPuffiCreator } from './shared/classes/product';
import { Subscription } from 'rxjs';
import { DataService } from './shared/services/data.service';


@Component({
  selector: 'pu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  lg = (screen.width > 895);
  sliderToggle = false;
  sliderImageFileName = 'flags_title.jpg';
  maybeOrder = '';
  sliderGoods: IImage[] = [];
  sliderInfos: IImage[] = this.data.imgs.filter(good => good.link.includes('flags'));
  orders: IImage[] = [];
  form: FormGroup = new FormGroup({});
  interior = false;
  price = this.data.imgs.filter(img => img.link === this.sliderImageFileName)[0].price;
  summ: any;
  hideForm = false;
  thanks = false;
  errorText: any;
  loading: any = [];
  goodQuantityInOrders = 0;
  event: MouseEvent | undefined;
  window = window;

  private subs = new Subscription();

  constructor(private fb: FormBuilder, private formService: FormService, private router: Router,
              public data: DataService) {
  }

  ngOnInit(): void {
    this.maybeOrder = this.sliderImageFileName.split('_' || '.')[0] + '.jpg';
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', Validators.required],
      address: ['', Validators.required],
    });
    const link = window.location.pathname.split('/'); // [0]localhost:4201/ [1]bag/ [2]dark-green_title.jpg
    if (!!link[2]) {

      const color = link[2].split('_')[0];
      this.sliderImageFileName = link[2];
      this.sliderInfos = this.data.imgs.filter(good => good.link.includes(color));
    }
    this.sliderGoods = this.data.getCategoryImgs('tagsId', this.data.defTag);

  }

  changeSliderImg(imgLink: any, target: any, value?: any) {
    if (this.sliderImageFileName !== imgLink) {
      (target.className === 'loader') ? this.loaderSwitch(target, true, value) : this.loaderSwitch(target, false, value);
    }
    this.sliderImageFileName = imgLink;
    this.errorText = false;
  }

  getInfoImgs(good: IImage, imgGood: any, target: any, value?: any) {
    this.router.navigate(['/bag', this.sliderImageFileName]);
    if (this.sliderImageFileName !== good.link) {
      (target.className === 'loader') ?
        this.loaderSwitch(target, true, value) : this.loaderSwitch(target, false, value);
    }
    const goodName = good.link.split('.')[0];
    this.sliderInfos = this.data.imgs.filter(item => item.link.includes(goodName.split('_')[0]));
    this.sliderImageFileName = this.data.imgs.filter(item => item.link.includes(goodName))[0].link;
    this.maybeOrder = this.sliderImageFileName.split('_' || '.')[0];
    this.price = (good.price) ? good.price : 0;
    if (good.link === 'interier_title.jpg') {
      this.interior = true;
    } else {
      this.interior = true;
    }
    this.errorText = false;
  }

  addGoodForOrder(sliderImageSrc: string, idx?: any) {
    this.orders.push({id: `${this.orders.length + 1}`, price: this.price, link: sliderImageSrc});
    this.sliderToggle = false;
    this.summ = this.orders.reduce((acc, v) => acc + (v.price ? v.price : 0), 0);
    this.hideForm = false;
    this.thanks = false;
    this.errorText = false;
    if (!!idx) {
      this.sliderGoods[idx].quantity = this.orders.filter(it => it.link === this.sliderGoods[idx].link).length;
    } else {
      this.sliderGoods.filter(it => it.link === sliderImageSrc)[0].quantity = this.orders
        .filter(it => it.link === sliderImageSrc).length;
    }
  }

  removeFromOrder(order: IImage) {
    this.orders = this.orders.filter(item => item.id !== order.id);
    this.summ = this.orders.reduce((acc, v) => acc + (v.price ? v.price : 0), 0);
    this.errorText = false;
  }

  onSubmit() {
    this.hideForm = true;
    this.formService.postOrder({
      name: this.form.value.name,
      address: this.form.value.address,
      phone: this.form.value.phone,
      count: this.orders.length,
      orders: this.orders,
    }).subscribe({
      error: err => {
        console.log(err);
        this.errorText = err;
        this.thanks = false;
        this.orders = [];
        this.form.reset();
      },
      complete: () => {
        this.thanks = true;
        this.orders = [];
        this.form.reset();
      },
    });
  }

  ngAfterViewInit(): void {
    let loaderOne = document.querySelector('.loader-one');
    if (loaderOne) {
      loaderOne.setAttribute('class', 'loader-one hide');
    }
  }

  loaderSwitch(target: any, hide: any, value?: any) {
    (hide) ? target.setAttribute('class', 'loader hide') : target.setAttribute('class', value);
  }

  updateEvent(event: MouseEvent) {
    this.event = event;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

import { Component, OnInit } from '@angular/core';
import { CrudService } from '@app/core/services/crud.service';
import { AppService } from '@app/core/services/app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pu-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: [''],
    phone: ['', Validators.required],
    address: [''],
  });

  constructor(private fb: FormBuilder, private crud: CrudService, public appService: AppService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.appService.hideForm = true;
    this.crud
      .create("/postOrder.php", {
        name: this.form.value.name,
        address: this.form.value.address,
        phone: this.form.value.phone,
        count: this.appService.orders.length,
        orders: this.appService.orders
      }, "https://devi-bag.by")
      .subscribe({
        error: err => {
          this.appService.errorText = err;
          this.appService.thanks = false;
          this.appService.orders = [];
          this.form.reset();
        },
        complete: () => {
          this.appService.thanks = true;
          this.appService.orders = [];
          this.form.reset();
        }
      });
  }


}

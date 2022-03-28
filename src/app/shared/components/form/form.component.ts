import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CrudService } from '@app/core/services/crud.service';
import { AppService } from '@app/core/services/app.service';
declare global {
  interface Window {
    ym?: any;
  }
}

@Component({
  selector: 'pu-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = this.fb.group({
    name: [''],
    phone: ['', Validators.required],
    address: [''],
  });
  private ym: any;
  constructor(private fb: FormBuilder, private crud: CrudService, public appService: AppService) { }

  ngOnInit(): void {}

  onSubmit(condition: boolean) {
    this.ym = window.ym;
    this.ym(88003989,'reachGoal','send_form');
    this.appService.hideForm = true;
    if(condition) {
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
    } else {

    }
  }
}

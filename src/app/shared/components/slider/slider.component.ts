import { Component, OnInit } from '@angular/core';
import { AppService } from '@app/core/services/app.service';

@Component({
  selector: 'pu-slider',
  templateUrl: './slider.component.html',
  styleUrls: [ './slider.component.scss' ],
})
export class SliderComponent implements OnInit {


  constructor(public appService: AppService) {
  }

  ngOnInit(): void {
  }


}

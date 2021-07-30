import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'pu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    let loaderOne = document.querySelector('.loader-one');
    if (loaderOne) {
      loaderOne.setAttribute('class', 'loader-one hide');
    }
  }
}

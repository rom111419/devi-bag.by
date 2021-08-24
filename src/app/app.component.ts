import { AfterViewInit, Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";


@Component({
  selector: "pu-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements AfterViewInit, OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  ngAfterViewInit(): void {
    let loaderOne = document.querySelector(".loader-one");
    if (loaderOne) {
      loaderOne.setAttribute("class", "loader-one hide");
    }
  }
}

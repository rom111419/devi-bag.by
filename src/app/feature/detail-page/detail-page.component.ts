import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "pu-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit {
  productId: string = this.activatedRoute.snapshot.params["id"];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }
}

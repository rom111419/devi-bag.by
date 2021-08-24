import { Component, Input, OnInit } from "@angular/core";
import { IImage } from "@app/core/classes/image.interface";

@Component({
  selector: "pu-good",
  templateUrl: "./good.component.html",
  styleUrls: ["./good.component.scss"]
})
export class GoodComponent implements OnInit {
  @Input() product: IImage = { id: "", link: "" };
  @Input() templ: "homePage" | "detailPage" | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}

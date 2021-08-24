import { Component, OnInit } from "@angular/core";
import { Tag } from "@app/core/interfaces/tag";
import { IImage } from "@app/core/classes/image.interface";

@Component({
  selector: "pu-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"]
})
export class HomePageComponent implements OnInit {
  tagId: Tag["id"] = "";
  productId: IImage["id"] = "";

  constructor() {
  }

  ngOnInit(): void {
    this.tagId = "001";
  }

}

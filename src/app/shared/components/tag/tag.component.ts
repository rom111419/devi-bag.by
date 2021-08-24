import { Component, Input, OnInit } from "@angular/core";
import { Tag } from "@app/core/interfaces/tag";

@Component({
  selector: "pu-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"]
})
export class TagComponent implements OnInit {
  @Input() tag: Tag = { id: "", name: "", img: [] };

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Observable } from "rxjs";
import { CrudService } from "@app/core/services/crud.service";
import { AppService } from "@app/core/services/app.service";
import { map } from "rxjs/operators";
import { Tag } from "@app/core/interfaces/tag";

@Component({
  selector: "pu-tags",
  templateUrl: "./tags.component.html",
  styleUrls: ["./tags.component.scss"]
})
export class TagsComponent implements OnInit {
  deviBagTags$: Observable<Tag[]>;
  @Output() onFilterDeviBugGoods: EventEmitter<Tag["id"]> = new EventEmitter<Tag["id"]>();

  constructor(private crud: CrudService, private appService: AppService) {
    this.deviBagTags$ = this.crud.get<Tag[]>("/assets/goods.json")
      .pipe(
        map(value => {
          console.log(value.filter(it => it.link.includes('_title.jpg')))
          return value.filter(it => it.link.includes('_title.jpg'));
        })
      );
  }

  ngOnInit(): void {
  }

  filterDeviBugGoods(tagId: Tag["id"]) {
    this.appService.clearOrders();
    this.onFilterDeviBugGoods.emit(tagId);
  }
}

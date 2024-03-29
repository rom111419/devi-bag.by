import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from "@angular/core";
import { CrudService } from "@app/core/services/crud.service";
import { Observable, tap } from "rxjs";
import { IImage } from "@app/core/classes/image.interface";
import { AppService } from "@app/core/services/app.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "pu-goods",
  templateUrl: "./goods.component.html",
  styleUrls: ["./goods.component.scss"]
})
export class GoodsComponent implements OnInit, OnChanges {
  @Input() templ: "homePage" | "detailPage" | undefined;
  @Input() path = 'https://devi-bag.by/devi-bag-images';
  @Output() onGoToDetailProduct: EventEmitter<IImage["id"]> = new EventEmitter<IImage["id"]>();
  snapshotParams: Params = this.activatedRoute.snapshot.params;
  deviBagImages$: Observable<IImage[]> | undefined;

  constructor(private crud: CrudService, public appService: AppService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getImages();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getImages();
  }

  getImages() {
    this.deviBagImages$ = this.crud.get<IImage[]>(this.path).pipe(
      tap(images => {
        this.appService.images = images;
      })
    );
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AppService } from '@app/core/services/app.service';
import { IImage } from '@app/core/classes/image.interface';

@Component({
  selector: "pu-detail-page",
  templateUrl: "./detail-page.component.html",
  styleUrls: ["./detail-page.component.scss"]
})
export class DetailPageComponent implements OnInit {
  productId: string = this.activatedRoute.snapshot.params["id"];
  product: IImage | undefined = this.appService.getImage(this.productId);
  constructor(private activatedRoute: ActivatedRoute, public appService: AppService) {
  }

  ngOnInit(): void {
  }
}

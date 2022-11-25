import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from "./shared/components/header/header.component";
import { SliderComponent } from "./shared/components/slider/slider.component";
import { TagComponent } from "./shared/components/tag/tag.component";
import { GoodComponent } from "./shared/components/good/good.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HomePageComponent } from "./feature/home-page/home-page.component";
import { TagsComponent } from "./shared/components/tags/tags.component";
import { GoodsComponent } from "./shared/components/goods/goods.component";
import { AddShoppingCartComponent } from "@app/shared/components/add-shopping-cart/add-shopping-cart.component";
import { DetailPageComponent } from "./feature/detail-page/detail-page.component";
import { DescriptionComponent } from "./shared/components/description/description.component";
import { FormModule } from '@app/shared/components/form/form.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent, SliderComponent, TagComponent, GoodComponent, FooterComponent, HomePageComponent, TagsComponent, GoodsComponent, AddShoppingCartComponent, DetailPageComponent, DescriptionComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}

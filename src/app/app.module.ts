import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { AddShoppingCartComponent } from './components/add-shopping-cart/add-shopping-cart.component';
import { UploadComponent } from './components/upload/upload.component';
import { PageComponent } from './components/page/page.component';

// import { LottieAnimationViewModule } from 'ng-lottie';

@NgModule({
  declarations: [AppComponent, FooterComponent, AddShoppingCartComponent, UploadComponent, PageComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}

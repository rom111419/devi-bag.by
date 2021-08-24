import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadComponent } from "@app/feature/upload/upload.component";
import { HomePageComponent } from "@app/feature/home-page/home-page.component";
import { DetailPageComponent } from "@app/feature/detail-page/detail-page.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "bags", component: HomePageComponent },
  { path: "bag/:id", component: DetailPageComponent },
  { path: "collections", component: HomePageComponent },
  { path: "collection/:id", component: DetailPageComponent },
  { path: "upload", component: UploadComponent }
  // {path: '**', component: AppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

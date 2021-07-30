import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from '@app/components/upload/upload.component';
import { PageComponent } from '@app/components/page/page.component';
import { AppComponent } from '@app/app.component';


const routes: Routes = [
  {path: '', component: PageComponent},
  {path: 'bags', component: PageComponent},
  {path: 'bag/:id', component: PageComponent},
  {path: 'collections', component: PageComponent},
  {path: 'collection/:id', component: PageComponent},
  {path: 'upload', component: UploadComponent},
  // {path: '**', component: AppComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
    {path: 'bags', component: AppComponent},
    {path: 'bag/:id', component: AppComponent},
    {path: 'collections', component: AppComponent},
    {path: 'collection/:id', component: AppComponent},
    // {path: '**', component: AppComponent
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

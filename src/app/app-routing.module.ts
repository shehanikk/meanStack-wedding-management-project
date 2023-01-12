import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-pages/home/home.component';
import { AboutUsComponent } from './main-pages/about-us/about-us.component';
import { WeddingComponent } from './navpages/wedding/wedding.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'wedding', component: WeddingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-pages/home/home.component';
import { AboutUsComponent } from './main-pages/about-us/about-us.component';
import { WeddingComponent } from './navpages/wedding/wedding.component';
import { UserpageComponent } from './navpages/userpage/userpage.component';
import { SigninComponent } from './navpages/signin/signin.component';
import { CartComponent } from './navpages/cart/cart.component';
import { CheckoutComponent } from './navpages/checkout/checkout.component';
import { ClientInforComponent } from './admin/client-infor/client-infor.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'wedding', component: WeddingComponent},
  {path: 'userpage', component:UserpageComponent},
  {path: 'signup', component:SigninComponent},
  {path: 'cart', component:CartComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'client', component: ClientInforComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

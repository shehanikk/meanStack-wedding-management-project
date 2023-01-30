import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-pages/home/home.component';
import { AboutUsComponent } from './main-pages/about-us/about-us.component';
import { WeddingComponent } from './navpages/wedding/wedding.component';
import { UserpageComponent } from './navpages/userpage/userpage.component';
import { SigninComponent } from './navpages/signin/signin.component';
import { CartComponent } from './navpages/cart/cart.component';
import { CheckoutComponent } from './navpages/checkout/checkout.component';
import { ItemDetailsComponent } from './view-item/item-details/item-details.component';
import { OurProductsComponent } from './navpages/our-products/our-products.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { PaymentPageComponent } from './payment/payment-page/payment-page.component';
import { OrderTrackPageComponent } from './payment/order-track-page/order-track-page.component';
import { AdminComponent } from './admin-pages/admin/admin.component';
import { WeddingTableComponent } from './wedding-tab-pages/wedding-table/wedding-table.component';
import { DanceMusicalComponent } from './wedding-tab-pages/dance-musical/dance-musical.component';
import { WeddingCarsComponent } from './wedding-tab-pages/wedding-cars/wedding-cars.component';
import { UpdateProductComponent } from './admin-pages/update-product/update-product.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'wedding', component: WeddingComponent},
  {path: 'userpage', component:UserpageComponent},
  {path: 'signup', component:SigninComponent},
  {path: 'cart', component:CartComponent},
  {path: 'checkout', component:CheckoutComponent},
  {path: 'stage/:id', component:ItemDetailsComponent},
  {path: 'cart', component:CartComponent},
  {path: 'ourproduct', component: OurProductsComponent},
  {path: 'payment',component: PaymentPageComponent},
  {path: 'track/:orderId', component:OrderTrackPageComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'table', component:WeddingTableComponent},
  {path: 'danceMusical', component:DanceMusicalComponent},
  {path: 'weddingCar',component:WeddingCarsComponent},
  {path: 'update/:id', component:UpdateProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// canActivate:[AuthGuard]

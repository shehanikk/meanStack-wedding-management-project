import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './static-pages/header/header.component';
import { FooterComponent } from './static-pages/footer/footer.component';
import { HomeComponent } from './main-pages/home/home.component';
import { AboutUsComponent } from './main-pages/about-us/about-us.component';
import { WeddingComponent } from './navpages/wedding/wedding.component';
import { UserpageComponent } from './navpages/userpage/userpage.component';
import { SigninComponent } from './navpages/signin/signin.component';
import { CartComponent } from './navpages/cart/cart.component';
import { CheckoutComponent } from './navpages/checkout/checkout.component';
import { ClientInforComponent } from './admin/client-infor/client-infor.component';
import { ItemDetailsComponent } from './view-item/item-details/item-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    WeddingComponent,
    UserpageComponent,
    SigninComponent,
    CartComponent,
    CheckoutComponent,
    ClientInforComponent,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

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
import { ItemDetailsComponent } from './view-item/item-details/item-details.component';
import { OurProductsComponent } from './navpages/our-products/our-products.component';
import { NotFoundPageComponent } from './navpages/not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InputContainerComponent } from './main-pages/input-container/input-container.component';
import { InputValidationComponent } from './main-pages/input-validation/input-validation.component';
import { TextInputComponent } from './main-pages/text-input/text-input.component';
import { DefaultButtonComponent } from './main-pages/default-button/default-button.component';
import { LoadingComponent } from './main-pages/loading/loading.component'
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { OrderItemListComponent } from './navpages/order-item-list/order-item-list.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './payment/payment-page/payment-page.component';
import { PaypalButtonComponent } from './payment/paypal-button/paypal-button.component';
import { OrderTrackPageComponent } from './payment/order-track-page/order-track-page.component';
import { AdminComponent } from './admin-pages/admin/admin.component';
import { WeddingTableComponent } from './wedding-tab-pages/wedding-table/wedding-table.component';
import { DanceMusicalComponent } from './wedding-tab-pages/dance-musical/dance-musical.component';
import { WeddingCarsComponent } from './wedding-tab-pages/wedding-cars/wedding-cars.component';
import { UpdateProductComponent } from './admin-pages/update-product/update-product.component';
import { PartyDjComponent } from './party-tab-pages/party-dj/party-dj.component';
import { BalloonComponent } from './party-tab-pages/balloon/balloon.component';
import { StageDecorationsComponent } from './event-tab-pages/stage-decorations/stage-decorations.component';
import { RedCarpetComponent } from './event-tab-pages/red-carpet/red-carpet.component';
import { ViewOrdersComponent } from './view-item/view-orders/view-orders.component';

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
    ItemDetailsComponent,
    OurProductsComponent,
    NotFoundPageComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    DefaultButtonComponent,
    LoadingComponent,
    OrderItemListComponent,
    PaymentPageComponent,
    PaypalButtonComponent,
    OrderTrackPageComponent,
    AdminComponent,
    WeddingTableComponent,
    DanceMusicalComponent,
    WeddingCarsComponent,
    UpdateProductComponent,
    PartyDjComponent,
    BalloonComponent,
    StageDecorationsComponent,
    RedCarpetComponent,
    ViewOrdersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass: 'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    {provide:HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

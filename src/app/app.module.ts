import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyBarComponent } from './shared/currency-bar/currency-bar.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { MenuBarComponent } from './shared/menu-bar/menu-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { ProductHorizontalCardComponent } from './pages/shared/product-horizontal-card/product-horizontal-card.component';
import { ProductVerticalCardComponent } from './pages/shared/product-vertical-card/product-vertical-card.component';
import { ProductHorizontalSmCardComponent } from './pages/shared/product-horizontal-sm-card/product-horizontal-sm-card.component';
import { CartPopupComponent } from './shared/cart-popup/cart-popup.component';
import { CartProductCardComponent } from './shared/cart-popup/cart-product-card/cart-product-card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyBarComponent,
    SearchBarComponent,
    MenuBarComponent,
    FooterComponent,
    HomeComponent,
    ShoppingCartComponent,
    ProductListComponent,
    ProductDetailComponent,
    LoginComponent,
    RegistrationComponent,
    CheckoutComponent,
    UserDashboardComponent,
    ProductHorizontalCardComponent,
    ProductVerticalCardComponent,
    ProductHorizontalSmCardComponent,
    CartPopupComponent,
    CartProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

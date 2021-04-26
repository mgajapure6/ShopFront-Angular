import { AuthGuardService as AuthGuard} from './guard/auth-guard.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ShoppingCartComponent } from './pages/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"product-list", component:ProductListComponent},
  {path:"product-list/:category-id", component:ProductListComponent},
  {path:"shopping-cart", component:ShoppingCartComponent},
  {path:"product-detail/:product-id", component:ProductDetailComponent},
  {path:"checkout", component:CheckoutComponent},
  {path:"order-complete", component:CheckoutComponent},
  {path:"login", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"user-dashboard", component:UserDashboardComponent, canActivate: [AuthGuard]},
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"**", redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

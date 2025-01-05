import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { CategoryComponent } from './pages/category/category.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignupComponent } from './pages/signup/signup.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';

export const routes: Routes = [
      {
        path: '',
        redirectTo: 'layout',
        pathMatch: 'full'
      },
      {
        path: 'layout',
        component: LayoutComponent,
        children:[
          {
            path: 'shop',
            component: ShopComponent,
          },
          {
            path: 'category',
            component: CategoryComponent,
          },
          {
            path: 'about',
            component: AboutComponent,
          },
          {
            path: 'contactus',
            component: ContactusComponent,
          },
          {
            path: 'cart',
            component: CartComponent,
          },
          {
            path: 'login',
            component: LoginComponent,
          },
          {
            path: 'signup',
            component: SignupComponent,
          },
          {
            path: 'wishlist',
            component: WishlistComponent,
          },
          {
            path: 'productdeatils',
            component: ProductdetailsComponent,
          },
        ]
      },
      // {
      //   path: 'navbar',
      //   component: NavbarComponent
      // },

];

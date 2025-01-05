import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ShopComponent } from '../../pages/shop/shop.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ContactusComponent } from '../../pages/contactus/contactus.component';
import { CartComponent } from '../../pages/cart/cart.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../pages/login/login.component';
import { SignupComponent } from '../../pages/signup/signup.component';
import { WishlistComponent } from '../../pages/wishlist/wishlist.component';
import { ProductdetailsComponent } from '../../pages/productdetails/productdetails.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    ShopComponent,
    CategoryComponent,
    AboutComponent,
    ContactusComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    WishlistComponent,
    ProductdetailsComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  selectedTab: string = '';

  constructor(private router: Router) {}

  selectTab(tab: string) {
    this.selectedTab = tab;
    this.router.navigateByUrl(`/layout/${tab}`); // Update the router to navigate to the selected tab
  }
}

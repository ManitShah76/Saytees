import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ShopComponent } from '../../pages/shop/shop.component';
import { CategoryComponent } from '../../pages/category/category.component';
import { AboutComponent } from '../../pages/about/about.component';
import { ContactusComponent } from '../../pages/contactus/contactus.component';
import { CartComponent } from '../../pages/cart/cart.component';
import { CommonModule } from '@angular/common';

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

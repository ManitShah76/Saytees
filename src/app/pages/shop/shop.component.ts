import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { PopularComponent } from '../popular/popular.component';
import { NewcollectionComponent } from '../newcollection/newcollection.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    PopularComponent,
    NewcollectionComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}

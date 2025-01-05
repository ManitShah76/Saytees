import { Component } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  selectedTab: string = '';
  
    constructor(private router: Router) {}
  
    selectTab(tab: string) {
      this.selectedTab = tab;
      this.router.navigateByUrl(`/layout/${tab}`); // Update the router to navigate to the selected tab
    }
}

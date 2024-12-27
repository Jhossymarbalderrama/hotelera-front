import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  classApplied: boolean = false;

  toggleClass(){
    this.classApplied = !this.classApplied;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  brand = { name: 'Peace Maker', routeTo: '' };
  navItems = [
    { name: 'Contact-Me', routeTo: 'contact-me' },
    { name: 'Portfolio', routeTo: 'portfolio' },
  ];
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Peace Maker';
  brand = { name: 'Peace Maker', routeTo: '' };
  navItems = [
    { name: 'Contact-Me', routeTo: 'contact-me' },
    { name: 'Portfolio', routeTo: 'portfolio' },
  ];
}

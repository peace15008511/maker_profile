import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './pages/profile/profile.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    ContactMeComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

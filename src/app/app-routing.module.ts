import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

const routes: Routes = [
  { path: '', component: ProfileComponent, title: 'Peace Profile' },
  {
    path: 'contact-me',
    component: ContactMeComponent,
    title: 'Peace Contacts',
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Peace Portfolios',
    pathMatch: 'full',
  },
  {
    path: 'web-manager',
    component: PortfolioComponent,
    title: 'Peace Profile Manager',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

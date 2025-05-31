import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { UslugeComponent } from './usluge/usluge.component';

export const routes: Routes = [
  { path: "portfolio", component: PortfolioComponent },
  { path: "usluge", component: UslugeComponent },
  { path: "", component: PocetnaComponent }
];

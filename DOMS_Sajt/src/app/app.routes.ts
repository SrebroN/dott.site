import { Routes } from '@angular/router';
import { EnterijeriComponent } from './enterijeri/enterijeri.component';
import { ModeliComponent } from './modeli/modeli.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { NamestajPoMeriComponent } from './namestaj-po-meri/namestaj-po-meri.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { AppComponent } from './app.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

export const routes: Routes = [
  {path: "enterijeri",component:EnterijeriComponent},
  {path: "modeli" , component:ModeliComponent},
  {path: "kontakt",component:KontaktComponent},
  {path: "namestaj_po_meri",component:NamestajPoMeriComponent},
  {path: "o_nama",component:ONamaComponent},
  {path: "",component:PocetnaComponent}
];

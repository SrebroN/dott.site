
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {TranslateModule, TranslateService} from '@ngx-translate/core'
@Component({
  selector: 'app-portfolio',
  imports: [CommonModule,TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  constructor (private router:Router, private translate:TranslateService){
    translate.addLangs(['en', 'sr']);
    translate.setFallbackLang('sr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|sr/) ? browserLang : 'sr');
  }
  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    })
  }
  images:string[]=[
    "../../assets/slike/11_copy.webp",
    "../../assets/slike/enterijer_1.webp",
    "../../assets/slike/enterijer_3.webp",
    "../../assets/slike/KUHINJA_1.webp",
    "../../assets/slike/KUHINJA_2.webp",
    "../../assets/slike/Aks2.webp",
    "../../assets/slike/namestaj_po_meri_1.webp",
    "../../assets/slike/render_copy.webp",
    "../../assets/slike/enterior_3.webp",
    "../../assets/slike/enterior_4.webp",
    "../../assets/slike/O1.webp",
    "../../assets/slike/O2 - kadrirano.webp",
    "../../assets/slike/kupatilo2.webp",
    "../../assets/slike/dnevna.webp",
    "../../assets/slike/slideshow_1.webp",
    "../../assets/slike/DNEVNA_1.webp",
    "../../assets/slike/DNEVNA_2.webp",
    "../../assets/slike/DNEVNA_3.webp",
    "../../assets/slike/T2.webp",
    "../../assets/slike/T3.webp",
    "../../assets/slike/T5.webp",
    "../../assets/slike/usluge.webp"
  ]
}

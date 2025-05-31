import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  constructor (private router:Router){}
  ngOnInit(){
    this.router.events.subscribe((event)=>{
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    })
  }
  images:string[]=[
    "../../assets/slike/11_copy.jpg",
    "../../assets/slike/enterijer_1.jpg",
    "../../assets/slike/enterijer_3.jpg",
    "../../assets/slike/KUHINJA_1.png",
    "../../assets/slike/KUHINJA_2.png",
    "../../assets/slike/Aks2.jpg",
    "../../assets/slike/namestaj_po_meri_1.png",
    "../../assets/slike/render_copy.jpg",
    "../../assets/slike/enterior_3.jpg",
    "../../assets/slike/enterior_4.jpg",
    "../../assets/slike/enterior_1.jpg",
    "../../assets/slike/enterior_2.jpg",
    "../../assets/slike/dnevna.jpg",
    "../../assets/slike/slideshow_1.jpg",
    "../../assets/slike/DNEVNA_1.png",
    "../../assets/slike/DNEVNA_2.png",
    "../../assets/slike/DNEVNA_3.png",
    "../../assets/slike/T2.jpg",
    "../../assets/slike/T3.png",
    "../../assets/slike/T5.jpg",
    "../../assets/slike/usluge.jpg"
  ]
}

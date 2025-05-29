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
    "../../assets/slike/doggo_table_1.avif",
    "../../assets/slike/doggo_table_2.avif",
    "../../assets/slike/doggo_table_3.avif",
    "../../assets/slike/doggo_table_4.avif",
    "../../assets/slike/doggo_table_5.avif",
    "../../assets/slike/doggo_table_6.avif",
    "../../assets/slike/doggo_table_7.avif",
    "../../assets/slike/doggo_table_8.avif"
  ]
}

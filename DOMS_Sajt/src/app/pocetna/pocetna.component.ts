import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css'
})
export class PocetnaComponent implements OnInit, OnDestroy {
  constructor (private router:Router){}
  images: string[] = [
    "assets/slike/slideshow_dog_1.webp",
    "assets/slike/slideshow_dog_2.jpg",
    "assets/slike/slideshow_dog_3.jpg",
    "assets/slike/slideshow_dog_4.jpg",
  ]
  currentIndex = 0;
  intervalId: any;
  ngOnInit(): void {
    this.startAutoSlide();
    this.router.events.subscribe((event)=>{
      if(!(event instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0,0);
    })
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
  prevSlide(){
    this.currentIndex=(this.currentIndex-1 +this.images.length)%this.images.length;
  }
}

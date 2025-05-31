import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule, ViewportScroller } from '@angular/common';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-pocetna',
  standalone: true,
  imports: [RouterLink, MatIconModule, CommonModule],
  templateUrl: './pocetna.component.html',
  styleUrl: './pocetna.component.css',
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('600ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('600ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class PocetnaComponent implements OnInit, OnDestroy {
  viewportScroller: any;
  constructor(private router: Router, private scroller: ViewportScroller) { }
  images: string[] = [
    "assets/slike/slideshow_1.jpg",
    "assets/slike/slideshow_2.jpg",
    "assets/slike/dnevna.jpg",
    "assets/slike/Aks2.jpg"
  ]
  currentIndex = 0;
  intervalId: any;
  ngOnInit(): void {
    this.startAutoSlide();
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
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
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
  scrollToFooter() {
    this.scroller.scrollToAnchor('toKontakt');
  }
  scrollToUsluge() {
     this.router.navigateByUrl('/usluge').then(() => {
      setTimeout(() => this.viewportScroller.scrollToAnchor(''), 1);
    });
  }
  scrollToEnterijer() {
    this.router.navigateByUrl('/usluge').then(() => {
      setTimeout(() => this.viewportScroller.scrollToAnchor('toEnterijer'), 1);
    });
  }
}

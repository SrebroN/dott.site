import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'app';
  showTopButton: boolean = false;
  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit() {
    this.router.navigate(["/"]);
  }
  scrollToKontakt() {
    this.scroller.scrollToAnchor("toKontakt");

  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > innerHeight;
  }
  scrollToTop() {
    window.scrollTo({ top: 0 });
  }

}


import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, MatIconModule,CommonModule,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'app';
  showTopButton: boolean = false;
  currLang:string;
  constructor(private scroller: ViewportScroller, private router: Router, private translate:TranslateService) {
    translate.addLangs(['en', 'sr']);
    translate.setFallbackLang('sr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|sr/) ? browserLang : 'sr');
    this.currLang=(browserLang?.match(/en|sr/) ? browserLang : 'sr');
  }

  switchLang(){
    this.currLang=(this.currLang==='en'?'sr':'en');
    this.translate.use(this.currLang);
    localStorage.setItem('lang', this.currLang);
  }

  ngOnInit() {
    this.router.navigate(["/"]);
  }
  scrollToKontakt() {
    this.scroller.scrollToAnchor("toKontakt");
  }
  scrollLogo() {
    this.router.navigate(["/"]);
    this.scrollToTop();
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > innerHeight;
  }
  scrollToTop() {
    window.scrollTo({ top: 0 });
  }
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleMenuRouter() {
    if (this.menuOpen) {
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
    this.scrollToTop();
  }
  toggleMenuRouterNoScroll(){
    if (this.menuOpen) {
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
  }
}


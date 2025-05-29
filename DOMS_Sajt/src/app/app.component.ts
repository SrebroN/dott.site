import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit() {
    this.router.navigate(["/"]);
  }
  scrollToKontakt() {
    this.scroller.scrollToAnchor("toKontakt");

  }
}

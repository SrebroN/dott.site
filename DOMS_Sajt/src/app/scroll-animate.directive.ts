import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appScrollAnimate]'
})
export class ScrollAnimateDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('slide-in');
    //      observer.unobserve(this.el.nativeElement); // remove to allow repeat
        }
      });
    }, {
      threshold: 0.1
    });


    this.el.nativeElement.classList.add('animate-on-scroll');
    observer.observe(this.el.nativeElement);
  }
}

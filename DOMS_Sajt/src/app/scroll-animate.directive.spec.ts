import { ScrollAnimateDirective } from './scroll-animate.directive';
import { ElementRef } from '@angular/core';

describe('ScrollAnimateDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new ScrollAnimateDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

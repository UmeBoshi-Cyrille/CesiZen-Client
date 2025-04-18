/* eslint-disable @typescript-eslint/no-explicit-any */
import { Directive, ElementRef, HostListener, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appNext]',
  standalone: true
})
export class NextDirective implements OnInit, OnDestroy {
  private intervalId: any;

  constructor(private el: ElementRef) { }

  getVisibleItems(): number {
    const sliderContainer = this.el.nativeElement.closest('.slider-wrap');
    if (!sliderContainer) {
      console.error('Slider container not found');
      return 1;
    }

    const containerWidth = sliderContainer.offsetWidth;
    const itemElement = sliderContainer.querySelector('.item');
    if (!itemElement) {
      console.error('Item element not found');
      return 1;
    }

    const itemWidth = itemElement.offsetWidth;
    return Math.floor(containerWidth / itemWidth);
  }

  @HostListener('click')
  nextFunc() {
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    const item = elm.getElementsByClassName('item');
    const visibleItems = this.getVisibleItems();
    for (let i = 0; i < visibleItems; i++) {
      elm.append(item[0]);
    }
  }

  startAutoScroll() {
    this.intervalId = setInterval(() => this.nextFunc(), 5000); // Change image every 5 seconds
  }

  stopAutoScroll() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnInit() {
    this.startAutoScroll(); // Start the automatic movement on initialization
  }

  ngOnDestroy() {
    this.stopAutoScroll(); // Clear interval when the directive is destroyed
  }
}

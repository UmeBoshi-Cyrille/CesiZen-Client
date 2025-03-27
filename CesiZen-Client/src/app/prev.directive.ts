import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
  selector: '[appPrev]',
  standalone: true
})
export class PrevDirective {

  constructor(private el: ElementRef) {
  }

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
  @HostListener("click")
  prevFunction() {
    const elm = this.el.nativeElement.parentElement.parentElement.children[0];
    const visibleItems = this.getVisibleItems();
    const item = elm.getElementsByClassName("item");
    for (let i = 0; i < visibleItems; i++) {
      elm.prepend(item[item.length - 1])
    }
  }

}

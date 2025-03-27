import { NextDirective } from './next.directive';
import { ElementRef } from '@angular/core';

describe('NextDirective', () => {
  let elementRefMock: ElementRef;

  beforeEach(() => {
    // Mock ElementRef
    elementRefMock = {
      nativeElement: document.createElement('div'),
    };
  });

  it('should create an instance', () => {
    const directive = new NextDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});

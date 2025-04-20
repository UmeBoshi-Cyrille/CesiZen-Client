import { PrevDirective } from './prev.directive';
import { ElementRef } from '@angular/core';

describe('PrevDirective', () => {
  let elementRefMock: ElementRef;

  beforeEach(() => {
    // Mock ElementRef
    elementRefMock = {
      nativeElement: document.createElement('div'),
    };
  });

  it('should create an instance', () => {
    const directive = new PrevDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});


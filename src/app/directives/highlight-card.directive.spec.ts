import { HighlightCardDirective } from './highlight-card.directive';
import { ElementRef } from '@angular/core';

describe('HighlightCardDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    const directive = new HighlightCardDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

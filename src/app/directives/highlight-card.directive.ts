import { Directive, ElementRef, HostListener, Input, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true
})
export class HighlightCardDirective implements OnChanges {

  @Input() externalColor:string = 'gray';
  @Input('appHighlightCard') defaultColor: string = 'yellow';

  constructor(private ele:ElementRef)
   {
    // this.ele.nativeElement.style.backgroundColor = this.externalColor;
    // console.log(ele);
  }
  ngOnChanges() {
    this.ele.nativeElement.style.backgroundColor = this.defaultColor
  }

  @HostListener('mouseover') over(){
    this.ele.nativeElement.style.backgroundColor = this.externalColor;
  }

  @HostListener('mouseout') out(){
    this.ele.nativeElement.style.backgroundColor = this.defaultColor;
  }

}

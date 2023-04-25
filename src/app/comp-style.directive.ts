import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appCompStyle]'
})
export class CompStyleDirective {

  constructor(public eobj : ElementRef) { 
    eobj.nativeElement.style.background='yellow'
    eobj.nativeElement.style.fontWeight='bold'
  }

}

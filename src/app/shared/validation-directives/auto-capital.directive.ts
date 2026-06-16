import { Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appTitleCase]'
})
export class TitleCaseDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('blur') onBlur() {
    if (this.el.nativeElement.value) {
      let arr: string[] = this.el.nativeElement.value.split(' ');
      arr = arr.map(val => {
        val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
        return val;
      });
      this.el.nativeElement.value = arr.join(' ');
   }
  }
}
import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appOnlyNumber]'
})
export class OnlyNumberDirective {

    public regex!: RegExp;
    private specialKeys: any = ['Backspace', 'Tab', 'End', 'Home'];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    KeyDown(event: KeyboardEvent) {
        this.regex = new RegExp(/^\s*(?=.*[0-9])\d*(?:\.\d{1,2})?\s*$/);
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(event.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (event.keyCode === 65 && (event.ctrlKey || event.metaKey)) ||
        // Allow: Ctrl+C
        (event.keyCode === 67 && (event.ctrlKey || event.metaKey)) ||
        // Allow: Ctrl+V
        (event.keyCode === 86 && (event.ctrlKey || event.metaKey)) ||
        // Allow: Ctrl+X
        (event.keyCode === 88 && (event.ctrlKey || event.metaKey)) ||
        // Allow: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
}

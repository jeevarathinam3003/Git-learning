import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appRangeNumber]'
})
export class RangeDirective {

    private specialKeys: any = ['Backspace', 'Tab', 'End', 'Home'];

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    KeyDown(event: KeyboardEvent) {
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        if (+next > 5 ) {
            event.preventDefault();
        }
    }
}

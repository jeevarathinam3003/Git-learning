import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[appDotNumber]'
})
export class NotAllowDotDirective {

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', ['$event'])
    KeyDown(event: KeyboardEvent) {
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next.includes('.')) {
            event.preventDefault();
        }
    }
}

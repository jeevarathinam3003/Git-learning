import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[alphanumeric]'
})

export class AlphanumbericDirective {

    @Input('numericDataType') numericType: any; // number | decimal

    private regex:any = {
        alphaNumeric: new RegExp(/^[A-Za-z0-9 ]+$/),
    };

    private specialKeys:any = {
        alphaNumeric: [ 'Backspace', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight' ],
    };

    constructor(private el: ElementRef) {
    }

    @HostListener('keydown', [ '$event' ])
    onKeyDown(event: KeyboardEvent) {
        if (this.specialKeys[this.numericType].indexOf(event.key) !== -1) {
            return;
        }
        // Do not use event.keycode this is deprecated.
        // See: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.regex[this.numericType])) {
            event.preventDefault();
        }
    }
}

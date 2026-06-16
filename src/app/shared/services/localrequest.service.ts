import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class LocalRequest {
    sub: Subject<any>;
    public studentFeepayment: any = {
        generateReport: '',
        standardId: '',
        sectionId: '',
        keyword: ''
    }

    public specificFeeDetails: any = {
        feeName: ''
    }
    constructor(
    ) {
        this.sub = new Subject<any>();
    }
    sendData(data: any) {
        this.sub.next(data)
    }

    previousUrl: any = '';
    setPreviousUrl(previousUrl: string) {
        this.previousUrl.next(previousUrl);
    }
}
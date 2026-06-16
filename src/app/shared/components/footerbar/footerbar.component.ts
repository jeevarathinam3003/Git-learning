import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrl: './footerbar.component.scss',
})
export class FooterbarComponent {

  constructor() { }

  ngOnInit() {
  }

  settings(type:any) {
    if (type == 1) {
      window.open(environment.linkList.termsAndConditions);
    } else if (type == 2) {
      window.open(environment.linkList.privacyPolicy);
    } else if (type == 3) {
      window.open(environment.linkList.aboutUs);
    } else if (type == 4) {
      window.open(environment.linkList.contanctUs);
    }
  }

}

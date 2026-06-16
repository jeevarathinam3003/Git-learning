import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-logout-confirm',
  templateUrl: './logout-confirm.component.html',
  styleUrl: './logout-confirm.component.scss'
})
export class LogoutConfirmComponent {

  constructor(
    public router: Router,
    public activeModal: NgbActiveModal,

  ) { }


  ngOnInit() {
  }

  confirmLogout() {
    this.activeModal.close();
    this.router.navigate(['auth/login']);
  }

  notLogout(){
    this.activeModal.close();
  }

}

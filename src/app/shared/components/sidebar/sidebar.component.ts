import { Component, OnInit, OnDestroy, SimpleChanges, Input } from "@angular/core";
// import { menu, mainmenu } from "./side-menu";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, map, mergeMap } from "rxjs/operators";
// import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "../../../../environments/environment";
import { AuthGuard } from "../../../providers/guards/auth.guard";

import { Subscription } from "rxjs";
// import get from 'lodash/get';
// import { CommonSandbox } from "../../../common/common.sandbox";

import { mainmenu } from "./side-menu";

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LogoutConfirmComponent } from "../../popup/logout-confirm/logout-confirm.component";



@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  public href: string = "";

  postUrl:any;

  settings: any = "settings";
  Menu : any;
  activeMenu: any;
  activatedRoute: any;

  mainmenu: any = mainmenu;
  showMenu: any;
  settingsURL : any = "settings";


  constructor(
    public router: Router,
    private modalService: NgbModal,

  ) { }

  private subscriptions: Array<Subscription> = [];

  ngOnInit() {
  }

  ngDoCheck() {

    this.activeMenu = this.removeSpecialCharacters(this.router.url);

    this.href = this.router.url;

    let all = this.href.split('/');
    this.activeMenu = all[1];

  }

  logout() {
    const modalRef = this.modalService.open(LogoutConfirmComponent, { windowClass: 'my-class', backdrop: 'static' });
        // modalRef.componentInstance.meeting_id = meeting.meeting_id;
        // modalRef.componentInstance.meeting_name = meeting.title;
        // modalRef.result.then(result => {
          // if (result === 'true') {
            // this.page = 1;
            // this.getGroupList();
            // this.getGroupListCount();
          // }
        // });
  }
  removeSpecialCharacters(word: string): string {
    return word.replace(/[^a-zA-Z0-9\s]/g, '');
  }

}



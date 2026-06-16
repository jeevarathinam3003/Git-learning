import { Component, OnInit } from '@angular/core';
// import { CommonSandbox } from '../common.sandbox';
// import { CommonService } from '../common.service';
// import {get} from 'lodash';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// import { NewUpdateComponents } from '../../shared/popup/new-update-popup/new-update-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {
  constructor(
    // public commonSandBox: CommonSandbox, 
    // private commonService: CommonService,
    // public modalService: NgbModal,
    public router: Router,) { }
  
  ngOnInit() {
    // console.log("ghgvg");
    
  }
}

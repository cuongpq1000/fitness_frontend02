import {Component, OnDestroy, OnInit} from '@angular/core';
import {first, mergeMap} from 'rxjs/operators';


import {NotificationService} from '../_services/notification.service';
import {PARecord} from '../_models/PARecord';
import {PArecordService} from '../_services/parecord.service';
import {UserService} from '../_services/user.service';
import { EditComponent } from '../edit/edit.component';


@Component({ templateUrl: 'home.component.html' ,

  styleUrls: ['home.component.css']})
export class HomeComponent implements OnInit {



  parecords: PARecord[] = [];


  constructor(
    private edit: EditComponent,
    private parecordservice: PArecordService,

    private notifService: NotificationService,
  ) {}

  ngOnInit() {
    this.loadAllPArecords();
  }





  private loadAllPArecords() {
    this.parecordservice.getMyProgress().subscribe(
         parecords => {
           this.parecords = parecords;
         },
        error => {
            this.notifService.showNotif(error.toString(), 'warning'); });
  }

  deletePARecord(date) {


    // this.userService.deleteActivity(date);
    this.parecordservice.delete(date).pipe(first()).subscribe( () => {
      this.parecords = null;
      this.loadAllPArecords();
    });
  }

}


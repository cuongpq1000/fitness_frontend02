import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PARecord} from '../_models/PARecord';
import {NotificationService} from '../_services/notification.service';
import { UserService } from '../_services/user.service';
import { User } from '../_models/user';
import { first } from 'rxjs/operators';
import {Role} from '../_models/role'
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'parecord-component',
  templateUrl: './parecord.component.html',
  styleUrls: ['./parecord.component.css']
})
export class ParecordComponent implements OnInit {
  @Output() date = new EventEmitter<Date>();
  @Input() parecord: PARecord;
  @Output() deleteEvent = new EventEmitter<Date>();
  mode = 'determinate';
  role: Role;
  bufferValue = 0;

   activities = ['directions_walk', 'directions_run', 'directions_bike'];


   color = 'primary';

   activity = this.activities[0];
   calprogressvalue = 0;
   minprogressvalue = 0;

  constructor(private notifService: NotificationService, private userService: UserService) { }

  delete(date) {
    this.deleteEvent.emit(date);
  }



  ngOnInit() {
    this.activity = this.activities[this.parecord.activityType];

    //TODO:  use userService to get the goal values corresponding the username that created the parecord and then use the obtained values to properly visualize the progress towards the goal.
    this.userService.getGoal(this.parecord.createdBy).pipe(first()).subscribe(res => {
        this.calprogressvalue = Math.round(this.parecord.calories / res.calorieGoal * 100);
        this.minprogressvalue = Math.round(this.parecord.minutes / res.minuteGoal * 100);
        this.role = res.role;
      },
      err => {
        this.notifService.showNotif('warning');
      }
    )

  }


}

import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../_services/notification.service';
import { UserService } from '../_services/user.service';
import { AuthService } from '../_services/auth.service';
@Component({
  selector: 'app-cuong',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private notifService: NotificationService, private userService: UserService, private authService: AuthService) { }
  calories: number;
  minutes: number;

  ngOnInit(): void {
  }

  save(){
    this.userService.setGoal(this.calories, this.minutes, this.authService.currentUserValue).subscribe(res => console.log(res));
  }

}







//TODO: since you will be creating the 'settings' component from scratch, you should delete the folder containing the component files (css,html and ts) and do 'ng g c settings --skipTests'.

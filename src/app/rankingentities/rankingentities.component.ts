import { Component, Input, OnInit } from '@angular/core';
import { Ranking } from '../_models/Ranking';
import { NotificationService } from '../_services/notification.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-rankingentities',
  templateUrl: './rankingentities.component.html',
  styleUrls: ['./rankingentities.component.css']
})
export class RankingentitiesComponent implements OnInit {
  @Input() ranking: Ranking;
  @Input() index: number;
  mode = 'determinate';
  color = 'primary';
  calprogressvalue = 0;
  minprogressvalue = 0;
  name: string;
  profileColor: string;
  randomColor: string[] = ['red', 'yellow', 'cyan', 'blue', 'orange', 'magenta'];


  constructor(private notifService: NotificationService) { }

  ngOnInit(): void {
    this.index += 1;
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user.username === this.ranking.username){
      this.profileColor = 'grey';
    }
    else{
      var random = Math.floor(Math.random() * (5 + 1));
      this.profileColor = this.randomColor[random];
    }
    this.calprogressvalue = Math.round(this.ranking.avgCalories / this.ranking.calgoal * 100);
    this.minprogressvalue = Math.round(this.ranking.avgMinutes / this.ranking.minutegoal * 100);
    this.name = (this.ranking.firstName.substring(0, 1) +  this.ranking.lastName.substring(0, 1)).toUpperCase();
  }


}

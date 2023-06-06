import { Component, OnInit } from '@angular/core';
import { Ranking } from '../_models/Ranking';
import { NotificationService } from '../_services/notification.service';
import { PArecordService } from '../_services/parecord.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rankingentitiess: Ranking[] = [];
  constructor(private parecordservice: PArecordService, private notifService: NotificationService) { }

  ngOnInit(): void {
    this.loadAllRanking();
  }

  private loadAllRanking(){
    this.parecordservice.getRanking().subscribe(
      res => {
        this.rankingentitiess = res.sort((first, second) => 0 - (first.avgminutes - second.avgminutes));
      },
      error => {
        this.notifService.showNotif(error.toString(), 'warning')
      }
    )
  }

}

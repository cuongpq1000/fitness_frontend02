import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {first, mergeMap} from 'rxjs/operators';
import { PArecordService } from '../_services/parecord.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
@Injectable({ providedIn: 'root' })
export class EditComponent implements OnInit {
  calories: number;
  minutes: number;
  type1: number;
  type: string;
  check: boolean;
  date: Date;
  constructor(private http: HttpClient, private parecordservice: PArecordService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(typeof history.state.date === 'undefined'){
      this.check = false;
    }
    else{
      this.check = true;
      this.date = history.state.date;
    }
  }

  save(){
    if(this.type === "run"){
      this.type1 = 1
    }
    else if(this.type == "walk"){
      this.type1 = 0;
    }
    else{
      this.type1 = 2;
    }
    const parecord = {
      calories: this.calories,
      minutes: this.minutes,
      steps: 1500,
      createdDate: this.date,
      activityType: this.type1,
    }

    this.parecordservice.add(parecord).subscribe(
      res => {
        console.log(res);
      }
    );

  }

}

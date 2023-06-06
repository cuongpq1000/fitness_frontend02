
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {AuthService} from './auth.service';
import {PARecord} from '../_models/PARecord';
import { EditComponent } from '../edit/edit.component';
import { Ranking } from '../_models/Ranking';
import { environment } from 'src/environments/environment';



@Injectable({ providedIn: 'root' })
export class PArecordService {
  constructor(private http: HttpClient, private auth: AuthService, private edit: EditComponent) { }

  getMyProgress() {
      return this.http.get<PARecord[]>(`${environment.url}/parecord/myprogress`);
  }

  add(parecord) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'id': localStorage.getItem("id") });
    let options = { headers: headers };
    return this.http.post(`${environment.url}/parecord/addparecord`, parecord, options);

  }

  getRanking(){
    return this.http.get<Ranking[]>(`${environment.url}/parecord/getranking`);
  }

  delete(date: string) {
    return this.http.delete(`${environment.url}/parecord/${date}`);

  }



}

import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() {
     return this.http.get<User[]>(`${environment.url}/user/allusers`);
  }

  register(user: User) {
    return this.http.post(`${environment.url}/user/register`, user);
  }
  setGoal(calories: number, minutes: number, user: User){
    const values = {
      calories,
      minutes
    }
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'id': localStorage.getItem("id") });
    let options = { headers: headers };
  
    return this.http.post(`${environment.url}/user/setgoals`, values, options);
  }

  getGoal(res: User){
    console.log(res.username);
    return this.http.get<User>(`${environment.url}/user/getgoals/${res.username}`);
  }
}

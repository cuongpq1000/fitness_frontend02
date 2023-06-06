import {Component} from '@angular/core';
import {AuthService} from './_services/auth.service';
import {Router} from '@angular/router';
import {User} from './_models/user';
import {Role} from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HW3Angular';
  currentUser: User;
  name: string;


  constructor(  private router: Router,
                private authService: AuthService
                ) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
    let user = JSON.parse(localStorage.getItem('currentUser'));
    if(user !== null){
      this.name = (user.firstName.substring(0,1) + user.lastName.substring(0,1)).toUpperCase();
    }

  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.admin;
  }

  get isUser() {

    return this.currentUser;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }



}

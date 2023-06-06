import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './_services/auth-guard.service';
import {AdminComponent} from './admin/admin.component';
import {SettingsComponent} from './settings/settings.component';
import {RegisterComponent} from './register/register.component';
import {Role} from './_models/role';
import { RankingComponent } from './ranking/ranking.component';
import { EditComponent } from './edit/edit.component';

//TODO: add the route to the 'settings' component.

const routes: Routes = [{path: '', component: HomeComponent, canActivate: [AuthGuard]}, {path: 'login', component: LoginComponent},{ path: 'register', component: RegisterComponent },
{path: 'settings', component: SettingsComponent},{path: 'edit', component: EditComponent}, {path: 'ranking', component: RankingComponent}
,{path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.admin]}}, { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

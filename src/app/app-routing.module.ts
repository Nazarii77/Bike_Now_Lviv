import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {LandingPageComponent} from './components/landing-page/landing-page.component';
import {LoginComponent} from './components/login/login.component';
import {MyAccountComponent} from './components/my-account/my-account.component';
import {SearchPageComponent} from './components/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-account', component: MyAccountComponent },
  { path: 'search', component: SearchPageComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

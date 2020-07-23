import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {XyzComponent} from './xyz/xyz.component';
import {MovieComponent} from './movie/movie.component';

const routes: Routes = [
  { path: '', component: XyzComponent },
  { path: 'xyz', component: XyzComponent },
  { path: 'register', component: MovieComponent },
  { path: 'admin', loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule) },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

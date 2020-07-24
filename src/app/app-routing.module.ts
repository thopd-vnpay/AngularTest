import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {XyzComponent} from './xyz/xyz.component';
import {MovieComponent} from './movie/movie.component';
import {HomeComponent} from './crud/home/home.component';

const routes: Routes = [
  { path: '', component: XyzComponent },
  { path: 'xyz', component: HomeComponent },
  { path: 'register', component: MovieComponent },
  { path: 'crud', loadChildren: () => import(`./crud/crud.module`).then(m => m.CrudModule) },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

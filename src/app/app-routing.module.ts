import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { XyzComponent} from './xyz/xyz.component';
import { MovieComponent} from './movie/movie.component';
import { HomeComponent} from './crud/home/home.component';

const routes: Routes = [
  { path: '', component: XyzComponent },
  { path: 'xyz', component: HomeComponent },
  { path: 'register', component: MovieComponent },
  { path: 'crud', loadChildren: () => import(`./crud/crud.module`).then(m => m.CrudModule) },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }];
const config: ExtraOptions = {
  useHash: false,
};
@NgModule({
  imports: [RouterModule.forRoot(routes,config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

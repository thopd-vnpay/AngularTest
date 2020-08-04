import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { XyzComponent} from './xyz/xyz.component';
import { MovieComponent} from './movie/movie.component';
import { HomeComponent} from './crud/home/home.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { AuthGuard} from './_helpes/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'xyz', component: XyzComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'crud', loadChildren: () => import(`./crud/crud.module`).then(m => m.CrudModule) , canActivate: [AuthGuard]},
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

import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { XyzComponent} from './xyz/xyz.component';
import { MovieComponent} from './movie/movie.component';
import { HomeComponent} from './crud/home/home.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { AuthGuard} from './_helpes/auth.guard';
import {TestformComponent} from './testform/testform.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SidemenuComponent} from './layout/sidemenu/sidemenu.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form', component: TestformComponent },
  { path: 'xyz', component: XyzComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sidemenu', component: SidemenuComponent },
  // { path: 'movies', component: MovieComponent },
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

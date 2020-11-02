import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';
import { XyzComponent} from './xyz/xyz.component';
import { MovieComponent} from './movie/movie.component';
import { HomeComponent} from './home/home.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent} from './login/login.component';
import { AuthGuard} from './_helpes/auth.guard';
import {TestformComponent} from './testform/testform.component';
import {HeaderComponent} from './layout/header/header.component';
import {FooterComponent} from './layout/footer/footer.component';
import {SidemenuComponent} from './layout/sidemenu/sidemenu.component';
import {AddTutorialComponent} from './pagination/add-tutorial/add-tutorial.component';
import {TutorialDetailsComponent} from './pagination/tutorial-details/tutorial-details.component';
import {TutorialsListComponent} from './pagination/tutorials-list/tutorials-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'form', component: TestformComponent },
  { path: 'xyz', component: XyzComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieComponent },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },
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

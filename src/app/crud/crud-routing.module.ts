import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {CreateComponent} from './create/create.component';
import {UpdateComponent} from './update/update.component';

const routes: Routes = [{
    path: '',
    component: HomeComponent,
    // children: [
    // {
    //   path: 'details/:productId',
    //   component: DetailsComponent,
    // },
    // {
    //   path: 'create',
    //   component: CreateComponent,
    // },
    // {
    //   path: 'crud/update/:productId',
    //   component: UpdateComponent,
    // }
    // ]
  }
  // ,
  // { path: 'crud/home', component: HomeComponent },
  // { path: 'crud/details/:productId', component: DetailsComponent },
  // { path: 'crud/create', component: CreateComponent },
  // { path: 'crud/update/:productId', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }

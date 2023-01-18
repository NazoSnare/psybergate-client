import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './components/address/address.component';
import { AllComponent } from './components/all/all.component';
import { CommentComponent } from './components/comment/comment.component';
import { DetailsComponent } from './components/details/details.component';
import { NewComponent } from './components/new/new.component';
import { NgModule } from '@angular/core';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  {
    path: '',
    component: AllComponent,
  },
  {
    path: 'new',
    component: NewComponent,
    children: [
      {
        path: 'details',
        component: DetailsComponent
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'comments',
        component: CommentComponent
      },
      {
        path: '**',
        redirectTo: 'details',
        pathMatch: 'full'
      }

    ]
  },
  {
    path: ':id',
    component: SingleComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }

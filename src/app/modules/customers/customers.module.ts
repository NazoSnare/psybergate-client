import { AddressComponent } from './components/address/address.component';
import { AllComponent } from './components/all/all.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { NewComponent } from './components/new/new.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SingleComponent } from './components/single/single.component';

@NgModule({
  declarations: [
    AllComponent,
    SingleComponent,
    NewComponent,
    DetailsComponent,
    AddressComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule
  ]
})
export class CustomersModule { }

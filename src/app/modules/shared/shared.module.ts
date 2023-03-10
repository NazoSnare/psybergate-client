import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddressPipe } from './pipes/address.pipe';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
    AddressPipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    AddressPipe
  ]
})
export class SharedModule { }

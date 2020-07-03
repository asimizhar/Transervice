import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BookingComponent } from 'src/app/modules/booking/booking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatTableModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    HttpClientModule
  ]
})
export class DefaultModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BookingComponent } from 'src/app/modules/booking/booking.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule, MatDividerModule, MatTableModule, MatDialogModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { BookingFormComponent } from 'src/app/modules/booking-form/booking-form.component';



@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    BookingComponent,
    BookingFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule
  ],
  entryComponents:[BookingFormComponent]
})
export class DefaultModule { }

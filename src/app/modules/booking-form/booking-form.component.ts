import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDataService } from 'src/app/service/data/booking-data.service';
import { BookOrder } from '../booking/booking.component';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  id:number
  order: BookOrder

  constructor(private dialogRef: MatDialogRef<BookingFormComponent>
    ) { }

  ngOnInit() {

}

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(){

  }

}

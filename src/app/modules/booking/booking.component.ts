import { Component, OnInit } from '@angular/core';
import { BookingDataService } from 'src/app/service/data/booking-data.service';
import {MatDialog} from "@angular/material"
import { BookingFormComponent } from '../booking-form/booking-form.component';
import {  Router } from '@angular/router';

export class Order {
  constructor(
   id: number,
  username: string,
  place: string,
  time: Date,
  passenger:number,
  status: string,
  ){

  }
}

const orders: Order[] = [
//   // {id: 1, username: 'Ahmad',place: 'Centre-> Mahallah Ali', time:new Date() ,passenger:2},
//   // {id: 2, username: 'Asim', place: 'Centre-> Mahallah Salahuddin', time:new Date() , passenger:4},
//   // {id: 3, username: 'Yana', place:'Mahallah Ruqayyah-> Celpad', time:new Date() , passenger:1},
//   // {id: 4, username: 'Abu', place: 'Mahallah Ali-> Library', time:new Date() , passenger:3},
//   // {id: 5, username: 'Bakar', place:'Mahallah Zubair-> KOE', time:new Date() , passenger:2},
//   // {id: 6, username: 'Amirul', place: 'Mahallah Ali-> KAED', time:new Date() , passenger:3},
//   // {id: 7, username: 'Amer', place: 'Mahallah Ali-> EDU', time:new Date() , passenger:4},
];

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  // orders: Order[]

  displayedColumns: string[] = ['id', 'username', 'place', 'time', 'passenger','status'];
  dataSource = orders;

  constructor(
    private orderService:BookingDataService,
    private dialog:MatDialog,
    private router:Router
  ) { }

  ngOnInit() {

  this.refreshOrders();

  }
  

  refreshOrders(){
    this.orderService.retrieveAllOrders('Asim').subscribe(
      response=>{
        console.log(response);
        this.dataSource=response;
      }
      )
     
  }

  onCreate(){
    this.dialog.open(BookingFormComponent,{
      height: '330px',
      width: '500px',
      disableClose:true,
      autoFocus:true,
    });
    
    // this.router.navigate(['orders',-1])

  }

}

import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDataService } from 'src/app/service/data/booking-data.service';
import { Order, BookingComponent } from '../booking/booking.component';


@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  id:number;
  passenger:number;
  order: Order;
 
  constructor(
    private dialogRef: MatDialogRef<BookingFormComponent>,
    private orderService:BookingDataService,
    private route:ActivatedRoute,
    private router:Router

    ) {}

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.order=new Order(this.id,"Asim",'',new Date(),this.passenger ," ")
  

    // if(this.id!=-1){
    // this.orderService.retrieveOrder('asim',this.id) 
    // .subscribe(
    //   data => this.order= data
    // )
    // }
}

redirectTo(uri:string){
  this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
  this.router.navigate(['orders']));
}


  onCancel() {
    this.dialogRef.close();
  }

  onSubmit(){
      this.orderService.createOrder('Asim',this.order)
      .subscribe(
        data =>{
          console.log(data)
          this.redirectTo('orders');
          this.dialogRef.close();
        }
      )


  }

}

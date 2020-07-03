import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookOrder } from 'src/app/modules/booking/booking.component';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {

  constructor(
    private http:HttpClient
  ) {}

  retrieveAllOrders(username){
    return this.http.get<BookOrder[]>(`http://localhost:8080/users/${username}/orders`);

  }
}

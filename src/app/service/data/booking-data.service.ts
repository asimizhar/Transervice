import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/modules/booking/booking.component';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {

  constructor(
    private http:HttpClient
  ) {}

  retrieveAllOrders(username){
    return this.http.get<Order[]>(`http://localhost:8080/users/${username}/orders`);

  }

  retrieveOrder(username,id){
    return this.http.get<Order>(`http://localhost:8080/users/${username}/orders/${id}`);
  }

  updateOrder(username,id,order){
    return this.http.put(`http://localhost:8080/users/${username}/orders/${id}`,order);
  }

  createOrder(username,order){
    return this.http.post(`http://localhost:8080/users/${username}/orders`,order);
  }
}

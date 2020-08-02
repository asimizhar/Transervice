import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/modules/booking/booking.component';
import { ORDER_JPA_API_URL } from 'src/app/app.constant';

@Injectable({
  providedIn: 'root'
})
export class BookingDataService {

  constructor(
    private http:HttpClient
  ) {}

  retrieveAllOrders(username){
    return this.http.get<Order[]>(`${ORDER_JPA_API_URL}/users/${username}/orders`);

  }

  retrieveOrder(username,id){
    return this.http.get<Order>(`${ORDER_JPA_API_URL}/users/${username}/orders/${id}`);
  }

  updateOrder(username,id,order){
    return this.http.put(`${ORDER_JPA_API_URL}/users/${username}/orders/${id}`,order);
  }

  createOrder(username,order){
    return this.http.post(`${ORDER_JPA_API_URL}/users/${username}/orders`,order);
  }
}

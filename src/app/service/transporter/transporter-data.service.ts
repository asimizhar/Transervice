import { Injectable } from '@angular/core';
import { Transporter } from 'src/app/transporter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransporterDataService {

  constructor(private httpClient: HttpClient) { }

  getTransporters() {
    return this.httpClient.get<Transporter[]>('http://localhost:8088/review/get');
  }

  addTransporter(newTransporter:Transporter) {
    return this.httpClient.post<Transporter>('http://localhost:8088/review/add', newTransporter);
  }
}

import { Component, OnInit } from '@angular/core';

export interface BookOrder {
  name: string;
  ID: number;
  place: string;
  time: string;
  passenger:number;
}

const BOOK_DATA: BookOrder[] = [
  {ID: 1, name: 'Ahmad',place: 'Centre-> Mahallah Ali', time:'11:00 AM', passenger:2},
  {ID: 2, name: 'Asim', place: 'Centre-> Mahallah Salahuddin', time: '12:00 AM', passenger:4},
  {ID: 3, name: 'Yana', place:'Mahallah Ruqayyah-> Celpad', time: '1:00 PM', passenger:1},
  {ID: 4, name: 'Abu', place: 'Mahallah Ali-> Library', time: '2:00 PM', passenger:3},
  {ID: 5, name: 'Bakar', place:'Mahallah Zubair-> KOE', time: '3:00 PM', passenger:2},
  {ID: 6, name: 'Amirul', place: 'Mahallah Ali-> KAED', time: '4:00 PM', passenger:3},
  {ID: 7, name: 'Amer', place: 'Mahallah Ali-> EDU', time: '6:00 PM', passenger:4},
];

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  displayedColumns: string[] = ['ID', 'name', 'place', 'time', 'passenger'];
  dataSource = BOOK_DATA;

  constructor() { }

  ngOnInit() {
  }

}

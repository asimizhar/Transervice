import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  Picture:string="assets/images/asim.jpg";

  constructor() { }

  ngOnInit() {
  }

}

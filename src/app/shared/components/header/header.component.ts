import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo:string="assets/images/transervice.png";

  @Output() toggleSideBarForMenu: EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit() { } 

  toggleSideBar() {
    this.toggleSideBarForMenu.emit();
  }

}

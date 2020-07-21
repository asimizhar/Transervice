import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logo:string="assets/images/transervice.png";

  @Output() toggleSideBarForMenu: EventEmitter<any>= new EventEmitter();

  constructor(private router:Router) { }

  ngOnInit() { } 

  toggleSideBar() {
    this.toggleSideBarForMenu.emit();
  }

  logout(){

    this.router.navigate(['login']);

  }

}

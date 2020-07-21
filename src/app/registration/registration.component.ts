import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationDataService } from '../service/registration/registration-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user= new User();
  msg='';

  constructor(private _service:RegistrationDataService, private _router:Router) { }

  ngOnInit() {
  }

  register(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response received");
        this.msg="Registration Successsful";
        this._router.navigate(['login'])
      },
      error=>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}

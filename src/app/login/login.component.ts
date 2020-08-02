import { Component, OnInit } from '@angular/core';
import { RegistrationDataService } from '../service/registration/registration-data.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
logo:string="assets/images/transervice.png";

 user= new User();
 msg='';

  constructor(
    private _service : RegistrationDataService,
    private _router:Router
    ) { }

  ngOnInit() {
  }

  loginUser(){
    this._service.loginUserFromRemote(this.user).subscribe(
      data=>{ 
        console.log("response received");
        this._router.navigate([''])

      },
      error=>{console.log("exception occured");
      this.msg="Please enter valid email or password";
    }
    )

  }

  gotoregistration(){
    this._router.navigate(['register'])

  }

}

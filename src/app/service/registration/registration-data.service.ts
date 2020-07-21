import { Injectable } from '@angular/core';
import { User } from 'src/app/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{

   return this._http.post<any>("http://localhost:8090/login",user)

  }

  public registerUserFromRemote(user:User):Observable<any>{

    return this._http.post<any>("http://localhost:8090/registeruser",user)
 
   }
}

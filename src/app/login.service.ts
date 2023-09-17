import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpMethod:HttpClient) { }

  getLogin(username:string, password:string):Observable<any>{
      const direccion = 'https://hosteleria-backend2-8esd-dev.fl0.io/Login/acceso';
      const login = {
        "username" : username,
        "password" : password
    }
      return this.httpMethod.post(direccion, login)
     }
  }
  

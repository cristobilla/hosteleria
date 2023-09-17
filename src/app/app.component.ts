import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  username: string ='';
  password: string = '';
  constructor(private loginService: LoginService){}
  title = 'hosteleria';
  value: any;
  getLogin(){
    console.log(this.username);
    console.log(this.password);
    console.log("llamada al node JS")
    const objeto = this.loginService.getLogin(this.username, this.password);
    objeto.subscribe((data)=>{
      //console.log(data[0].user_username);
      console.log(data);
      console.log(data.length)
      if(data.length > 0){
        if(data[0].user_isActive === true){
          console.log("Activo")
        }
        else{
          console.log("Inactivo")
        }
      }
      else{
        console.log("usuario no existe")
      }
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public username: any
  public password: any
  public versionData: any
  public objectData: any
  constructor(public auth: AuthServiceService) { }

  ngOnInit() {
  }
  login(){
    this.auth.getLogin(this.username, this.password).then((result) => {
      console.log("Login works");
      console.log(result);
      this.versionData= result['apiVersion'];
      console.log(this.versionData);
       this.objectData = result['objectType'];
       console.log(this.objectData);
    }, (err) => {
      console.log(err);
    });
  }

}

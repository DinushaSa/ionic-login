import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {dataKey, baseUrl, endpoint} from '../keys';
let apiUrl = baseUrl+ endpoint;

@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {
 public datakey:any=dataKey;
  constructor(public http: HttpClient) { }
  
  getLogin(username:string, password:string){
    return new Promise ((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','Authorization': 'Basic '+btoa(username + ':'  +password)});

      let creds = 'Username=' + username + "Password=" + password;*/
      this.http.get(apiUrl+this.datakey,{headers: headers}).subscribe(res =>{
        resolve(res);
    },(err) => {
      reject(err);
      });
    });
  }

 
}

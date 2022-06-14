import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {dataKey, baseUrl, endpoint} from '../keys';
let apiUrl = baseUrl+ endpoint;
/*export interface IRequestOptions {
  headers?: HttpHeaders | { [header: string]: string | Array<string> };
}*/
@Injectable({
  providedIn: 'root'
})


export class AuthServiceService {
 public datakey:any=dataKey;
  constructor(public http: HttpClient) { }
  
 // headers.set('Content-Type', 'application/json; charset=utf-8');


  getLogin(username:string, password:string){
    return new Promise ((resolve, reject) => {
    let headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8','Authorization': 'Basic '+btoa(username + ':'  +password)});
     // headers.append('Content-Type', 'application/json; charset=utf-8');

    /*  headers.append('Access-Control-Allow-Origin' , '*');
      headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
      //headers = headers.set('Content-Type', 'application/json; charset=utf-8').set('Authorization','Basic'+btoa(username+":"+password));*/
      let creds = 'Username=' + username + "Password=" + password;*/
      this.http.get('https://cors-anywhere.herokuapp.com/'+apiUrl+this.datakey,{headers: headers}).subscribe(res =>{
        resolve(res);
       // console.log(res);
    },(err) => {
      reject(err);
     // console.log(err);
      });
    });
  }

 
}

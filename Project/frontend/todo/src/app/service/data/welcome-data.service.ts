import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class messageBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeBeanService() {
    return this.http.get<messageBean>('http://localhost:8080/hello-world-bean')
  }

  executeService(name: string) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })
    return this.http.get<messageBean>(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      // { headers }
    );
    //console.log("Execute Hello World Bean Service")
  }

  // createBasicAuthenticationHttpHeader() {
  //   let username = 'han'
  //   let password = 'harry0708'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }

}

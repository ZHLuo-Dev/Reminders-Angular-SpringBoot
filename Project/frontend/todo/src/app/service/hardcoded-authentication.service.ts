import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  constructor() { }

  authenticate(username: string, password: string) {
    console.log('before ' + this.log_status())
    if (username === "han" && password === 'harry0708') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after ' + this.log_status())
      return true;
    }
    return false
  }

  log_status() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
  }
}

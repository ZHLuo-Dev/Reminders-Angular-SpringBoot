import { BasicAuthenticationService } from './../service/basicAuthentication.service';
import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    standalone: true,
    imports: [NgIf, FormsModule]
})
export class LoginComponent implements OnInit {

  username = 'han'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

  handleBasicAuthLogin() {
    //console.log(this.username);
    //if(this.username==="han" && this.password === 'harry0708') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe({
          next: (data) => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error: (error) => {
            console.log(error)
            this.invalidLogin = true
          }
    })
  }


  handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        error: (error) => {
          console.log(error);
          this.invalidLogin = true;
        }
      });
  }
  

}
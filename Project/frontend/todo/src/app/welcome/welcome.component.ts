import { ActivatedRoute, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'; // Added
import { WelcomeDataService } from '../service/data/welcome-data.service';
 
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  standalone: true, 
  imports: [RouterLink, NgIf] 
})


export class WelcomeComponent implements OnInit {

  message = 'Welcome, my friend!'
  welcomeMessageFromService: string = ''
  name = ''

  constructor(private route: ActivatedRoute, private service: WelcomeDataService) { 

  }
  
  ngOnInit() {
    ///console.log(this.message)
    this.name= this.route.snapshot.params['name']
  }

  getWelcomeMessageWithName(){
    //console.log(this.service.executeService());
    this.service.executeService(this.name).subscribe({
      next: (response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
    });
    
    // console.log("last line of welcome message")
   }

  getWelcomeMessage(){
   //console.log(this.service.executeService());
    this.service.executeBeanService().subscribe({
      next:(response) => this.handleSuccessfulResponse(response),
      error: (error) => this.handleErrorResponse(error)
  });
    //console.log("last line of welcome message")
  }

  handleSuccessfulResponse(response:any ){
    this.welcomeMessageFromService = response.message
    //console.log(response.message);
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message
  }

}
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.css'],
    standalone: true 
})
export class ErrorComponent implements OnInit {
  errorMessage = 'An error occured! '
  constructor() { }

  ngOnInit() {
  }

}
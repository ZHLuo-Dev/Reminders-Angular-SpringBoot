import { Component,OnInit } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
  standalone: true, 
  imports: [RouterLink,CommonModule] 
})

export class LogoutComponent implements OnInit {

  constructor(public HardcodedAuthenticationService: HardcodedAuthenticationService) {

  }

  ngOnInit() {
    this.HardcodedAuthenticationService.logout();
  }
 
}
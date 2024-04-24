import { Component,OnInit} from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
  standalone: true, 
  imports: [RouterLink,CommonModule] 
})

export class MenuComponent implements OnInit {

  constructor(public HardcodedAuthenticationService: HardcodedAuthenticationService) {}
  ngOnInit() {}
 
}
import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { MyAuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser = "Rozia";

  hoverEdit = false;
  hoverEdit1 = false;
  hoverEdit2 = false;
  hoverEdit3 = false;
  hoverEdit4 = false;
  hoverEdit5 = false;
  
  constructor(public authService: MyAuthService,
    private readonly router: Router) { }

  ngOnInit(): void {

    // $("#menu-toggle").click(function(e) {
    //   e.preventDefault();
    //   $("#wrapper").toggleClass("toggled");
    // });
  }

  logout() {
    this.authService.LogOut();
  }
  @HostListener('window:keydown.control.l', ['$event'])
  showPinned(event: KeyboardEvent) {
    event.preventDefault();
    this.logout();
    this.router.navigate(['login-page']);
    }

}

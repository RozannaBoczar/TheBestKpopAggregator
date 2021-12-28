import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

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
  constructor() { }

  ngOnInit(): void {

    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });


  }

}

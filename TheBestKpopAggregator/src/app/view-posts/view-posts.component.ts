import { Component, OnInit, Input } from '@angular/core';
import { Band } from '../Band';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {


  @Input() band?: Band;

  constructor() { }

  ngOnInit(): void {
  }

}

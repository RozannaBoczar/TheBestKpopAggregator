//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';

import { Band } from '../band';
import { ViewPostsComponent } from '../view-posts/view-posts.component';

@Component({
  selector: 'app-social-media-posts',
  templateUrl: './social-media-posts.component.html',
  styleUrls: ['./social-media-posts.component.css']
})
export class SocialMediaPostsComponent implements OnInit{

  @Input() band?: Band;

  constructor() { }

  ngOnInit(): void {

  }

}

import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Band } from '../Band';
import { SocialMedia } from '../SOCIALMEDIA';
import { POSTS } from '../PostsMock';
import { Post } from '../Posts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {


  
  @Input() socialMedia:SocialMedia;
  @Input() band: Band;
  posts : Post[];
 // currentPosts : Post[];
  //count = 3;

  constructor() { 
   
  }

  ngOnInit(): void {
    //this.currentPosts = POSTS;
    this.posts = POSTS //this.currentPosts;//.slice(0, this.count);
  }
  
  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);

  }

}

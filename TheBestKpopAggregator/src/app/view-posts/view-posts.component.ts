import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Band } from '../Band';
import { SocialMedia } from '../SOCIALMEDIA';
import { POSTS } from '../PostsMock';
import { Post } from '../Posts';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {


  @Input() band?: Band;

  @Input() socialMedia?:SocialMedia;

  posts : Post[];
  count = 3;

  constructor() { 
   
  }

  ngOnInit(): void {
    this.posts = POSTS.slice(0, this.count);
  }

  // @HostListener("window:scroll", [])
  // onWindowScroll(): void {
  //   console.log("woof");
  //   if (this.bottomReached()) {
  //     this.posts = POSTS.slice(0, this.count++);

  //   }
  // }

  // bottomReached(): boolean {
  //   return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  // }
  
  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    this.posts.push(POSTS[this.count++]);

  }

  // onScrollUp(ev: any) {
  //   console.log("scrolled up!", ev);
  //   this.posts = POSTS.slice(0, this.count++);
  // }


}

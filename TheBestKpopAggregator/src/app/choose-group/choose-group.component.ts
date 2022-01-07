import { Component, OnInit , ViewEncapsulation, HostBinding} from '@angular/core';
import { Band } from '../Band';
import { BANDS } from '../bank-mock';
import { NgSelectModule } from '@ng-select/ng-select';
import { Output, EventEmitter } from '@angular/core';
import { SOCIALMEDIA } from '../socialMediaMock';
import { SocialMedia } from '../SOCIALMEDIA';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('choosing', [
      // ...
      state('normal', style({
      })),
      state('onHover', style({
        width: '40%'
      })),
      state('chosen', style({
        width: '50%'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    // animation triggers go here
  ]
})
export class ChooseGroupComponent implements OnInit {

  bands = BANDS;
  // @Output() newBand = new EventEmitter<Band>();
 
   selectedBand = BANDS[1];
   band?:Band;

   selectedMedia = SOCIALMEDIA[1];
   socialMedia?:SocialMedia;

   isChosen = false;
   isOnHoover = false;
   isNormal = true;

   isChosen1 = true;
   isOnHoover1 = false;
   isNormal1 = true;

   isChosen2 = false;
   isOnHoover2 = false;
   isNormal2 = true;


  constructor() { }

  ngOnInit(): void {
  }

  public selectBand($event: Band){
    this.selectedBand = $event;
  }

  public selectSocialMedia(liczba: number){
    this.selectedMedia = SOCIALMEDIA[liczba];
    this.socialMedia = this.selectedMedia;
    this.choose(liczba);
    
  }

  public jump(liczba: number){
    if(liczba==0){
      this.isOnHoover = !this.isOnHoover;
      this.isNormal = !this.isNormal;
    }
    if(liczba==1){
      this.isOnHoover1 = !this.isOnHoover1;
      this.isNormal1 = !this.isNormal1;
    }
    if(liczba==2){
      this.isOnHoover2 = !this.isOnHoover2;
      this.isNormal2 = !this.isNormal2;
    }
  }

  public choose(liczba: number){
    if(liczba==0){
      this.isChosen = true;
      this.isChosen1 = false;
      this.isChosen2 = false;

    }
    if(liczba==1){
      this.isChosen1 = true;
      this.isChosen = false;
      this.isChosen2 = false;
    }
    if(liczba==2){
      this.isChosen2 = true;
      this.isChosen1 = false;
      this.isChosen = false;
    }
  }


}

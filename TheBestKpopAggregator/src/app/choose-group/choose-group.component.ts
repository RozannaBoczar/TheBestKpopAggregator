import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Band } from '../Band';
import { BANDS } from '../bank-mock';
import { NgSelectModule } from '@ng-select/ng-select';
import { Output, EventEmitter } from '@angular/core';
import { SOCIALMEDIA } from '../socialMediaMock';
import { SocialMedia } from '../SOCIALMEDIA';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChooseGroupComponent implements OnInit {

  bands = BANDS;
  // @Output() newBand = new EventEmitter<Band>();
 
   selectedBand = BANDS[1];
   band?:Band;

   selectedMedia = SOCIALMEDIA[1];
   socialMedia?:SocialMedia;



  constructor() { }

  ngOnInit(): void {
  }

  public selectBand($event: Band){
    this.selectedBand = $event;
  }

  public selectSocialMedia(liczba: number){
    this.selectedMedia = SOCIALMEDIA[liczba];
    this.socialMedia = this.selectedMedia;
  }

}

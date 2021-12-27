import { Component, OnInit } from '@angular/core';
import { Band } from '../Band';
import { BANDS } from '../bank-mock';
import { NgSelectModule } from '@ng-select/ng-select';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choose-group',
  templateUrl: './choose-group.component.html',
  styleUrls: ['./choose-group.component.css']
})
export class ChooseGroupComponent implements OnInit {

  bands = BANDS;
  // @Output() newBand = new EventEmitter<Band>();
 
   selectedBand?:Band;
   band?:Band;
 
   onChange(band: Band): void {
     this.selectedBand = band;
    // this.newBand.emit(band);
 
   }

  constructor() { }

  ngOnInit(): void {
  }


}

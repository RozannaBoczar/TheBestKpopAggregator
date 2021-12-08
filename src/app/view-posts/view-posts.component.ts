import { Component, OnInit } from '@angular/core';
import { BANDS } from '../band-mock';
import { BandService } from '../band.service';
import { Band } from '../band';
import { NgSelectModule } from '@ng-select/ng-select';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  bands = BANDS;
 // @Output() newBand = new EventEmitter<Band>();

  selectedBand?:Band;
  band?:Band;

  onChange(band: Band): void {
    this.selectedBand = band;
   // this.newBand.emit(band);

  }

  constructor() {}

  ngOnInit(): void {

    this.selectedBand = BANDS[0];
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseGroupComponent } from './choose-group.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

describe('ChooseGroupComponent', () => {
  let component: ChooseGroupComponent;
  let fixture: ComponentFixture<ChooseGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseGroupComponent ],
      imports:[
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

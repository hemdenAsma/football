import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatesMainComponent } from './updates-main.component';
import {HttpClientModule} from "@angular/common/http";

describe('UpdatesMainComponent', () => {
  let component: UpdatesMainComponent;
  let fixture: ComponentFixture<UpdatesMainComponent>;
  TestBed.configureTestingModule({
    imports: [HttpClientModule],
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatesMainComponent, HttpClientModule],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatesMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

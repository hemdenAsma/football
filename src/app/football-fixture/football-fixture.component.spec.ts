import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFixtureComponent } from './football-fixture.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";

describe('FootballFixtureComponent', () => {
  let component: FootballFixtureComponent;
  let fixture: ComponentFixture<FootballFixtureComponent>;
  TestBed.configureTestingModule({
    imports: [RouterTestingModule],
  });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballFixtureComponent, HttpClientModule, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballFixtureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

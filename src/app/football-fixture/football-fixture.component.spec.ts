import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballFixtureComponent } from './football-fixture.component';

describe('FootballFixtureComponent', () => {
  let component: FootballFixtureComponent;
  let fixture: ComponentFixture<FootballFixtureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FootballFixtureComponent]
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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNavbarComponent } from './country-navbar.component';

describe('CountryNavbarComponent', () => {
  let component: CountryNavbarComponent;
  let fixture: ComponentFixture<CountryNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CountryNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

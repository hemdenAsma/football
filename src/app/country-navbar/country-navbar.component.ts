import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {Country} from "../shared/constant/country";

@Component({
  selector: 'football-country-navbar',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './country-navbar.component.html',
  styleUrl: './country-navbar.component.scss'
})
export class CountryNavbarComponent implements OnInit{

  public countryList: Array<string> = [];
  public countrySelected: string;

  @Input() defaultCountry : string;
  @Output() public getSelectedCountry: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    this.countryList= Country;
    if (this.defaultCountry){
      this.countrySelected = this.defaultCountry;
    }
  }
  selectCountry(selectedCountryName: string): void{
    this.countrySelected = selectedCountryName;
    this.getSelectedCountry.emit(selectedCountryName);
  }


}

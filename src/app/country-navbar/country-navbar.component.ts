import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Country} from "../shared/constant/country";

@Component({
  selector: 'football-country-navbar',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './country-navbar.component.html',
  styleUrl: './country-navbar.component.scss'
})
export class CountryNavbarComponent implements OnInit{

  public countryList: Array<string> = [];

  @Output() public getSelectedCountry: EventEmitter<number> = new EventEmitter<number>();
  ngOnInit(): void {
    this.countryList= Country;
    //this.selectCountry(this.countryList[0]);
  }
  selectCountry(selectedCountryName: string): void{
    this.getSelectedCountry.emit(this.getLeagueId(selectedCountryName));
  }
  private getLeagueId(countryName: string): number{
    switch(countryName) {
      case 'England': {
        return 39;
        break;
      }
      case 'Spain': {
        return 140;
        break;
      }
      case 'France': {
        return 61;
        break;
      }
      case 'Germany': {
        return 78;
        break;
      }
      case 'Italy': {
        return 135;
        break
      }
      default: {
        return 0;
        break;
      }
    }
  }

}

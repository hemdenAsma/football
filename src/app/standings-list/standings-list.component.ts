import {Component, OnInit} from '@angular/core';
import {StandingService} from "../shared/services/standing.service";
import {Standing} from "../shared/interfaces/standing";
import {NgForOf, NgIf} from "@angular/common";
import {CountryNavbarComponent} from "../country-navbar/country-navbar.component";
import {Router} from "@angular/router";
import {Team} from "../shared/interfaces/team";

@Component({
  selector: 'football-standings-list',
  standalone: true,
  imports: [
    NgForOf,
    CountryNavbarComponent,
    NgIf
  ],
  templateUrl: './standings-list.component.html',
  styleUrl: './standings-list.component.scss'
})
export class StandingsListComponent implements OnInit {

  public standingsList: Standing[] = [];
  public selectedCountry: string;

  constructor(private standingService: StandingService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('selectedCountry')){
      this.getCountry(localStorage.getItem('selectedCountry'));
      localStorage.clear();
    }
  }

  public getCountry(country: string): void {
    this.selectedCountry = country;
    this.getStandingsList(country);
  }

  getStandingsList(countryName: string): void {
    const currentYear = new Date().getFullYear();
    const leagueId = this.getLeagueId(countryName);
    this.standingService.getStandingsByLeagueAndSeason(leagueId, currentYear).subscribe(result => {
      this.standingsList = result['response'][0]['league']['standings'][0];
    });
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
  }  navigateToTeamPage(selectedTeam: Team): void {
    localStorage.setItem('selectedCountry', this.selectedCountry);
    this.router.navigate(['/team/' + selectedTeam.id]);
  }


}

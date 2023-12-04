import {Component, OnInit} from '@angular/core';
import {StandingService} from "../shared/services/standing.service";
import {Standing} from "../shared/interfaces/standing";
import {NgForOf} from "@angular/common";
import {CountryNavbarComponent} from "../country-navbar/country-navbar.component";
import {Router} from "@angular/router";
import {Team} from "../shared/interfaces/team";

@Component({
  selector: 'football-standings-list',
  standalone: true,
  imports: [
    NgForOf,
    CountryNavbarComponent
  ],
  templateUrl: './standings-list.component.html',
  styleUrl: './standings-list.component.scss'
})
export class StandingsListComponent implements OnInit {

  public standingsList: Standing[] = [];
  private leagueId: number;

  constructor(private standingService: StandingService, private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('leagueId')){
      this.getCountry(+localStorage.getItem('leagueId'));
      localStorage.clear();
    }
  }

  public getCountry(leagueId: number): void {
    this.leagueId = leagueId;
    this.getStandingsList(leagueId);
  }

  getStandingsList(leagueId: number): void {
    const currentYear = new Date().getFullYear();
    this.standingService.getStandingsByLeagueAndSeason(leagueId, currentYear).subscribe(result => {
      this.standingsList = result['response'][0]['league']['standings'][0];
    });
  }

  navigateToTeamPage(selectedTeam: Team): void {
    localStorage.setItem('leagueId', this.leagueId.toString());
    this.router.navigate(['/team/' + selectedTeam.id]);
  }


}

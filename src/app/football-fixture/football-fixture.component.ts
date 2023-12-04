import {Component, OnInit} from '@angular/core';
import {FixtureService} from "../shared/services/fixture.service";
import {ActivatedRoute} from "@angular/router";
import {Location, NgForOf} from "@angular/common";
import {Team} from "../shared/interfaces/team";
import {Goals} from "../shared/interfaces/goals";
import {Fixture} from "../shared/interfaces/fixture";

@Component({
  selector: 'football-football-fixture',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './football-fixture.component.html',
  styleUrl: './football-fixture.component.scss'
})
export class FootballFixtureComponent implements OnInit {
  public fixturesList: Fixture[
    ];
  private teamId: number;

  constructor(private fixtureService: FixtureService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teamId = params['id'];
    });
    this.getFixturesList();
  }

  getFixturesList(): void {
    const currentYear = new Date().getFullYear();
    const last = 10;
    this.fixtureService.getFixtures(currentYear, this.teamId, last).subscribe(result => {
      this.fixturesList = result['response'];
    });
  }
  getTeam(element: object, type: string): Team{
    return element['teams'][type];
  }
  getGoal(element: object, type: string): Goals{
    return element['goals'][type];
  }
  backToLeaguePage(): void {
    this.location.back();
  }
}

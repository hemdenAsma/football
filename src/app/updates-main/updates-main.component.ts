import { Component } from '@angular/core';
import {StandingsListComponent} from "../standings-list/standings-list.component";

@Component({
  selector: 'football-updates-main',
  standalone: true,
  imports: [
    StandingsListComponent
  ],
  templateUrl: './updates-main.component.html',
  styleUrl: './updates-main.component.scss'
})
export class UpdatesMainComponent {


}

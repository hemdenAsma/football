import { Routes } from '@angular/router';
import {UpdatesMainComponent} from "./updates-main/updates-main.component";
import {FootballFixtureComponent} from "./football-fixture/football-fixture.component";

export const routes: Routes = [
  {path: '',
  component: UpdatesMainComponent
  },
  {
    path: 'team/:id',
    component: FootballFixtureComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

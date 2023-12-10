import {Fixture} from "./fixture";
import {Goals} from "./goals";
import {League} from "./league";
import {Team} from "./team";

export interface MatchSummary {
  fixture: Fixture;
  goals: Goals;
  league: League;
  teams: Team;
}

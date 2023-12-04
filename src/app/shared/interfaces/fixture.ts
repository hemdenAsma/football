import {Team} from "./team";
import {Goals} from "./goals";

export class Fixture {
  public teams: {home: Team, away: Team}
  public goals: {home: Goals, away: Goals}
}

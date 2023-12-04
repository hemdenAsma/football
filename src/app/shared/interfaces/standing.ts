import {Team} from "./team";
import {Home} from "./home";

export interface Standing {
  id: number;
  description: string;
  team: Team;
  group: string;
  points: number;
  goalsDiff: number;
  rank: number;
  status: string;
  home: Home;
}

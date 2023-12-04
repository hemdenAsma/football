import {Goals} from "./goals";

export interface Home {
  draw: number;
  lose: number;
  played: number;
  win: number;
  goals: Goals;
}

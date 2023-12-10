import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Standing} from "../interfaces/standing";

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  constructor(private http: HttpClient) { }

  getStandingsByLeagueAndSeason(leagueId: number, season: number): Observable<Standing>{
    let params = new HttpParams();
    params = params.append('league', leagueId);
    params = params.append('season', season);
    return this.http.get<Standing>('https://v3.football.api-sports.io/standings', {params, responseType: "json"});
  }
}

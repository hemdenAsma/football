import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StandingService {

  constructor(private http: HttpClient) { }

  getStandingsByLeagueAndSeason(leagueId: number, season: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('league', leagueId);
    params = params.append('season', season);
    return this.http.get('/standings', {params})
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private http: HttpClient) { }

  getFixtures( season: number, teamId: number, last: number): Observable<object>{
    let params = new HttpParams();
    params = params.append('season', season);
    params = params.append('team', teamId);
    params = params.append('last', last);
    return this.http.get<object>('https://v3.football.api-sports.io/fixtures', {params});
  }
}

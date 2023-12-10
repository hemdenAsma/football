import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fixture} from "../interfaces/fixture";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private http: HttpClient) { }

  getFixtures( season: number, teamId: number, last: number): Observable<Fixture[]>{
    let params = new HttpParams();
    params = params.append('season', season);
    params = params.append('team', teamId);
    params = params.append('last', last);
    return this.http.get<Fixture[]>('https://v3.football.api-sports.io/fixtures', {params});
  }
}

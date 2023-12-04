import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  constructor(private http: HttpClient) { }

  getFixtures( season: number, teamId: number, last: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('season', season);
    params = params.append('team', teamId);
    params = params.append('last', last);
    return this.http.get('/fixtures', {params});
  }
}

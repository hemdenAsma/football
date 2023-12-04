import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  constructor(private http: HttpClient) {
  }

  getCurrentLeaguesByCountry(name: string, country: string, current: boolean): Observable<object> {

    let params = new HttpParams();
    params = params.append('name', name);
    params = params.append('country', country);
    params = params.append('current', current);
    return this.http.get('/leagues', {params});
  }
}

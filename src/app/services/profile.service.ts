import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:9090";

  getProfiles(){
    return this.http.get(this.url + "/profiles", {observe:'response'});
  }
}

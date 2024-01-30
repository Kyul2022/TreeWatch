import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plant } from './plant';


@Injectable({
  providedIn: 'root'
})
export class PlantServiceService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/plants';
  }

  public findAll(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.usersUrl);
  }

  public save(plant: Plant) {
    return this.http.post<Plant>(this.usersUrl, plant);
  }
}

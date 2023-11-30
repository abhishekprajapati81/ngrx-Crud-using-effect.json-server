import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empolyee } from '../Interface/employee';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {}

  getEmployee(): Observable<Empolyee[]> {
    return this.http.get<Empolyee[]>(this.url);
  }

  getNewEmployee(getData: Empolyee): Observable<Empolyee> {
    return this.http.post<Empolyee>(this.url, getData);
  }
}

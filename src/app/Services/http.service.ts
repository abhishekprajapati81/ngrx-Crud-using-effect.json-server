import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  url: string = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {}
  getEmployee() {
    return this.http.get(this.url);
  }
}

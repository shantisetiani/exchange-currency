import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  
  list(): Observable<any> {
    const url = 'https://api.exchangeratesapi.io/latest?base=USD';
    return this.http.get(url);
  }
}
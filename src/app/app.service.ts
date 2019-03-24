import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Currency } from './app.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrencyService {
    private baseUrl = 'https://api.exchangeratesapi.io/latest?base=USD';
  
    constructor(private http: HttpClient) { }
  
    list(): Observable<Currency[]> {
        const url = `${this.baseUrl}/`;
        return this.http.get(url).pipe(
            map((data: any[]) => data.map((item: any) => new Currency(
              item.base,
              new Date(item.created),
              item.rates
            ))),
          );
    }
}
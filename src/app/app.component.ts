import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test = "";

  constructor(private http: HttpClient) {}

  list(): Observable<any> {
      const url = 'https://api.exchangeratesapi.io/latest?base=USD';

      // for (prop in data) {
      //   if (data.hasOwnProperty(prop)) {
      //       console.log(prop)
      //   }
      // }

      this.http.get(url).subscribe(data => { 
        this.test = JSON.stringify(data);
        console.log(this.test)
      });
      // return this.http.get(url).pipe(
      //   map((data: any[]) => data.map((item: any) => {
      //     base = item.base,
      //     new Date(item.created),
      //     item.rates
      //   })),
      // );
      return this.http.get(url);
  }
}
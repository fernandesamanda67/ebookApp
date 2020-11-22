import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EbookService {

  url = 'https://itunes.apple.com/search';

  constructor(private http: HttpClient) { }

  searchData(searchValue: string): Observable<any> {
    return this.http.get(`${this.url}?term=${encodeURI(searchValue)}&entity=ebook`)
    .pipe(
      map(response => response[`results`])
    );
  }

  getEbook(id: string): Observable<any> {
    return this.http.get(`${this.url}?term=${encodeURI(id)}&entity=ebook`)
    .pipe(
      map(response => response[`results`])
    );
  }
}

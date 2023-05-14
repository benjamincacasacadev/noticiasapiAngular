import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http: HttpClient) {
  }

  getAllNoticias(): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=40&language=en&from=2023-05-12&to=2023-05-13&sortBy=popularity&apiKey=cf51f1ecc7f44aa78cf49910509cb1ec';
    return this.http.get(URL);
  }
}

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
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=40&language=en&sortBy=popularity&apiKey=cf51f1ecc7f44aa78cf49910509cb1ec';
    return this.http.get(URL);
  }

  getTechNoticias(): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=40&language=en&category=technology&sortBy=popularity&apiKey=cf51f1ecc7f44aa78cf49910509cb1ec';
    return this.http.get(URL);
  }

  getSportsNoticias(): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=40&category=sports&sortBy=popularity&apiKey=cf51f1ecc7f44aa78cf49910509cb1ec';
    return this.http.get(URL);
  }
}

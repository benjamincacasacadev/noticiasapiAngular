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
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=20&language=en&sortBy=popularity&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    return this.http.get(URL);
  }

  getTechNoticias(): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=20&language=en&category=technology&sortBy=popularity&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    return this.http.get(URL);
  }

  getSportsNoticias(): Observable<any>{
    const URL = 'https://newsapi.org/v2/top-headlines?pageSize=20&category=sports&sortBy=popularity&apiKey=c838fed29d5d4304b39cc9bdbfa719b8';
    return this.http.get(URL);
  }
}

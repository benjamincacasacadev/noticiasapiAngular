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
    const URL = 'https://saurav.tech/NewsAPI/everything/cnn.json';
    return this.http.get(URL);
  }

  getTechNoticias(): Observable<any>{
    const URL = 'https://saurav.tech/NewsAPI/top-headlines/category/technology/us.json';
    return this.http.get(URL);
  }

  getSportsNoticias(): Observable<any>{
    const URL = 'https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json';
    return this.http.get(URL);
  }
}

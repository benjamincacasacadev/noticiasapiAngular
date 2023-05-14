import { Component } from '@angular/core';
import { NewsapiservicesService } from 'src/app/services/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent {
  constructor(private services: NewsapiservicesService){}

  listSportsNoticias: any[] = [];

  ngOnInit(): void{
    this.services.getSportsNoticias().subscribe((data) => {
      this.listSportsNoticias = data.articles;
    });
  }
}

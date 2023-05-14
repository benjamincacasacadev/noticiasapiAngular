import { Component } from '@angular/core';
import { NewsapiservicesService } from 'src/app/services/newsapiservices.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {
  constructor(private services: NewsapiservicesService){}

  listTechNoticias: any[] = [];

  ngOnInit(): void{
    this.services.getTechNoticias().subscribe((data) => {
      this.listTechNoticias = data.articles;
    });
  }
}

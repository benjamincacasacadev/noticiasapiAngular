import { Component } from '@angular/core';
import { NewsapiservicesService } from 'src/app/services/newsapiservices.service';

@Component({
  selector: 'app-listado-general',
  templateUrl: './listado-general.component.html',
  styleUrls: ['./listado-general.component.css']
})
export class ListadoGeneralComponent {
  constructor(private services: NewsapiservicesService){}

  listGeneralNoticias: any[] = [];

  ngOnInit(): void{
    this.services.getAllNoticias().subscribe((data) => {
      this.listGeneralNoticias = data.articles;
    });
  }
}

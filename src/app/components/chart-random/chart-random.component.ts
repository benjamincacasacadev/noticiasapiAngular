import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { SocketService } from 'src/app/socket.service';

@Component({
  selector: 'app-chart-random',
  templateUrl: './chart-random.component.html',
  styleUrls: ['./chart-random.component.css','../home/home.component.css']
})
export class ChartRandomComponent implements OnInit {

  title = 'livechart';
  chart: any;
  constructor( private srv: SocketService){}

  ngOnInit(){

    this.srv.listen('dataupdate').subscribe((res:any) =>{
      console.log("hola",res);
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    });

    this.chart = new Chart("canvas", {
      type: 'bar',
      data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
          datasets: [{
              label: 'Cantidad de ventas',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: '#3F3FBF',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

    // this.chart = new Chart('canvas', {
    //   type: 'bar',
    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //     },
    //   },
    //   data: {
    //     labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
    //     datasets: [
    //       {
    //         type: 'bar',
    //         label: 'Cantidad de ventas',
    //         // data: [10, 3, 6, 11, 38, 5, 6, 17],
    //         backgroundColor: '#3F3FBF',
    //         fill: false
    //       }
    //     ]
    //   }
    // });


  }

}

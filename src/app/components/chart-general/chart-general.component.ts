import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Chart } from 'chart.js';
import { SocketService } from 'src/app/socket.service';
import { io } from "socket.io-client";

@Component({
  selector: 'app-chart-general',
  templateUrl: './chart-general.component.html',
  styleUrls: ['./chart-general.component.css','../home/home.component.css']
})
export class ChartGeneralComponent implements OnInit {
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  title = 'primerChart';
  chart: any;
  articuloSeleccionado = "1";
  cantidadSeleccionado = "1";
  socket: any;


  constructor( private srv: SocketService){
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    const ctx = document.getElementById('voteChart')
    this.chart = new Chart('voteChart', {
        type:'bar',
        // data: {
        //     labels: ['Reporte de ventas'],
        // },
        data: {
          labels: ['Reporte de ventas'],
            datasets: [{
                label: 'UPS',
                data: [],
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

    this.srv.listen('update').subscribe((candidates:any) =>{
      candidates = Object.entries(candidates);
      for(const [key,candidate] of candidates){
        if(typeof this.chart.data.datasets[key] == "undefined" && this.chart.data.datasets.length < candidates.length){
            this.chart.data.datasets.push({
                backgroundColor: candidate.color,
                borderColor: candidate.color,
                data: [candidate.votes],
                label: candidate.label
            });
        } else if(typeof this.chart.data.datasets[key] != "undefined"){
            this.chart.data.datasets[key].data = [candidate.votes];
        }
      }
      this.chart.update();
    });
  }

  vote(){
    const articulo = this.articuloSeleccionado;
    let artValue : number = parseInt(articulo);

    const cantidad = this.cantidadSeleccionado;
    let cantValue : number = parseInt(cantidad);
    this.socket.emit('vote',artValue, cantValue);
  }

  reset(){
    this.socket.emit('vote',0);
  }

}


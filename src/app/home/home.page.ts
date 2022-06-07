import { Component, ElementRef, ViewChild } from '@angular/core';
import { DataProviderService } from '../data-provider.service'
import { Chart, registerables } from 'chart.js';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  itemListData1=[];
  @ViewChild('barCanvas', {static: true}) private barCanvas: ElementRef;

  barChart: any;
  showData=[];
  showDataNames = [];

  constructor(private myProvider: DataProviderService) {
    Chart.register(...registerables);
  }
  
  ionViewWillEnter() {
    console.log('Start init');
    this.barChartMethod();
    this.myProvider.graphData(this.showData,this.barChart);
    this.myProvider.graphDataNames(this.showDataNames,this.barChart);
    this.myProvider.getAll(this.itemListData1,null); 
  }

  barChartMethod() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: this.showDataNames,
        datasets: [{
          label: 'Top Ratings',
          data: this.showData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {}
    });
  }

}

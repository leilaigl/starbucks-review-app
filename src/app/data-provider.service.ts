import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http:HttpClient) {
    console.log('Create Data Provider');
  }

  getAll(itemList2, event) {
    this.http.get('http://343d-35-227-15-88.ngrok.io/getRate?min=1&max=5').subscribe(data=>
      {
        for(let i=0; i<data['data'].length;i++) {
          console.log(data['data'][i]);
          itemList2.push(data['data'][i]);
        }
      }
    );
    event.target.complete();
  }

  getData(drink, itemList, event) {
    this.http.get('http://343d-35-227-15-88.ngrok.io/getDrink?drink='+drink).subscribe(data=>
      {
        for(let i=0; i<data['data'].length;i++) {
          console.log(data['data'][i]);
          itemList.push(data['data'][i]);
        }
      }
    );
    if(drink != 0) {
      event.target.complete();
    }
  }

  reviewData(name, drinkInput, price, rate, blend, event) {
    this.http.get("http://343d-35-227-15-88.ngrok.io/insert?name="+name+"&drink="+drinkInput+"&blend="+blend+"&price="+price+"&rate="+rate).subscribe()
    event.target.complete()
  }

  graphData(listData: any,barChart: any) {
    this.http.get('http://343d-35-227-15-88.ngrok.io/graphData').subscribe(data =>
    {
      for(let i=0;i<data['data'].length;i++) 
        listData.push(data['data'][i]);
      console.log(listData);
      barChart.update(0);
      console.log(listData);
    }
    );
  }

  graphDataNames(listData: any,barChart: any) {
    this.http.get('http://343d-35-227-15-88.ngrok.io/graphDataNames').subscribe(data =>
    {
      for(let i=0;i<data['data'].length;i++) 
        listData.push(data['data'][i]);
      console.log(listData);
      barChart.update(0);
      console.log(listData);
    }
    );
  }
}
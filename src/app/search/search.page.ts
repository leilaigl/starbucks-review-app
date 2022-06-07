import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  itemListData=[];
  nameSearch: { input: string; };

  constructor(private myProvider: DataProviderService) { }

  ionViewDidEnter() {
    console.log('Start ionViewDidEnter');
    this.myProvider.getData(this.nameSearch,this.itemListData,null); 
  }
  
  ngOnInit() {
  }

}

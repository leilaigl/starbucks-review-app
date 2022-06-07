import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-write-review',
  templateUrl: './write-review.page.html',
  styleUrls: ['./write-review.page.scss'],
})
export class WriteReviewPage implements OnInit {
  itemListData=[];
  name: { input: string; };
  drinkInput: { input: string; };
  price: { input: string; };
  rate: { input: string; };
  blend: { input: string; };

  constructor(private myProvider: DataProviderService, private router: Router) { }

  ionForm() {
    console.log('Start ionForm');
    this.router.navigate(['/success']);
    this.myProvider.reviewData(this.name,this.drinkInput,this.price,this.rate,this.blend, null); 
  }
  
  ngOnInit() {
  }

}

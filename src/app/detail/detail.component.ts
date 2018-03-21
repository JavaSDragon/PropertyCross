import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private detailList: any;
  private buttonValue:any="+";
  private position:number;
  constructor(private searchResultService: SearchResultService, private location: Location) { }

  ngOnInit() {
    this.detailList = this.searchResultService.detail;
    this.searchResultService.faves.forEach((elem,i) => {
      if(this.detailList==elem){
        this.buttonValue="-";
      }
    });
  }
  back() {
    this.location.back();
  }
  addFaves() {
  this.searchResultService.faves.push(this.detailList)
  localStorage.setItem('faves', JSON.stringify(this.searchResultService.faves));
  if(this.buttonValue==="+"){
    this.buttonValue="-"
  }
  else{
    this.buttonValue="+"
  }
  }
}

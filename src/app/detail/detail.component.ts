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
  constructor(private searchResultService: SearchResultService, private location: Location) { }

  ngOnInit() {
    this.detailList = this.searchResultService.detail;
    console.log(this.detailList)
  }
  back() {
    this.location.back();
  }
  addFaves() {
  this.searchResultService.faves.push(this.detailList)
  }
}

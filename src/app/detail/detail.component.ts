import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
//import { InfiniteScroll } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private detailList: any;
  private buttonValue: any = "+";
  private position: number;
  constructor(private searchResultService: SearchResultService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.detailList = this.searchResultService.detail;
    this.checkList();
  }
  back() {
    this.router.navigate(['/result']);
  }
  private goFaves(){
    this.router.navigate(['/faves']);
  }
  addFaves() {
    if (this.buttonValue === "+") {
      this.searchResultService.faves.push(this.detailList)
      localStorage.setItem('faves', JSON.stringify(this.searchResultService.faves));
      this.buttonValue === "+" ? this.buttonValue = "-" : this.buttonValue = "+";
    }
    else {
      this.searchResultService.faves.splice(this.position, 1);
      localStorage.setItem('faves', JSON.stringify(this.searchResultService.faves));
      this.buttonValue === "-" ? this.buttonValue = "+" : this.buttonValue = "-";
    }
  }
  private checkList() {
    this.searchResultService.faves.forEach((elem, i) => {
      if (this.detailList.title == elem.title) {
        this.buttonValue = "-";
        this.position = i;
      }
    });
  }
  onScroll () {
    console.log('scrolled!!')
}
}

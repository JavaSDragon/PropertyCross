import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  private searchList = [];
  private getLocation: string;
  private page: number;
  constructor(private searchResultService: SearchResultService, private location: Location, private router: Router) { }
  ngOnInit() {
    this.searchList = this.searchResultService.currentList;
    console.log(this.searchList);
    this.page = 5;
  }
  private back() {
    this.router.navigate(['/search']);
  }
  private detail(item) {
    this.searchResultService.detail = item;
    this.router.navigate(['/detail']);
  }
  private onScroll() {
    this.searchResultService.getPage(this.page)
      .subscribe((data) => {
        data.forEach((item) => {
          this.searchList.push(item)
        })
      });
      this.page += 1;
  }
}

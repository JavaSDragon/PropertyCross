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
  constructor(private searchResultService: SearchResultService, private location: Location, private router: Router) { }
  ngOnInit() {
    this.searchList = this.searchResultService.currentList;
  }
  back() {
    this.router.navigate(['/search']);
  }
  detail(item) {
    this.searchResultService.detail = item;
    this.router.navigate(['/detail']);
  }
  onScroll () {
    console.log('scrolled!!')
}
}

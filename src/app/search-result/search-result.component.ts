import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { SearchResultService } from '../searchResult.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchList: Result[] = [];
  constructor(private searchResultService:SearchResultService) { }

  ngOnInit() {
    this.searchResultService.getInfo()
      .subscribe((data) => {
        this.searchList = data;
        console.log(this.searchList);
      });
  }
}

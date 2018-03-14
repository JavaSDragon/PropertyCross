import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search=[];
  constructor(private searchResultService:SearchResultService) { }

  ngOnInit() {
    this.searchResultService.getInfo()
    .subscribe(search=> console.log(search));
  }

}

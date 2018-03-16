import { Input, EventEmitter, Component, OnInit, Output } from '@angular/core';
import { Result } from '../result';
import { SearchResultService } from '../searchResult.service';
import { SearchComponent } from '../search/search.component';



@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  searchList: Result[] = [];
  constructor(private searchResultService: SearchResultService) { }
  ngOnInit() {
    this.searchResultService.getInfo()
      .subscribe((data) => {
        this.searchList = data;
      });
  }
}

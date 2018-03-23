import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
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

  constructor(private searchResultService: SearchResultService, private router: Router) { }

  public ngOnInit(): void {
    this.searchList = this.searchResultService.currentList;
    this.page = 5;
  }

  private back(): void {
    this.router.navigate(['/search']);
  }

  private detail(item): void {
    this.searchResultService.detail = item;
    this.router.navigate(['/detail']);
  }

  private onScroll(): void {
    this.searchResultService.getPage(this.page)
      .subscribe(data => {
        this.searchList = [...this.searchList, ...data];
      });
    this.page += 1;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultService } from '../searchResult.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';
import { Result } from '../result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchRequest: any[];
  private inputControl: any;
  private searchTitle: string = "Recent searches:";

  constructor(private searchResultService: SearchResultService, private router: Router) {
  }

  public ngOnInit(): void {
    this.inputControl = new FormControl();
    if (JSON.parse(localStorage.getItem('request'))) {
      this.searchResultService.listings = JSON.parse(localStorage.getItem('request'));
    }
    this.searchRequest = this.searchResultService.listings;
  }

  private go(): void {
    this.searchResultService.getNumRes(this.inputControl.value)
      .pipe(
        map(item => item.slice(-5)),
        filter(item => item.length <= 5)
      )
      .subscribe((data) => {
        this.searchRequest = data;
        localStorage.setItem('request', JSON.stringify(this.searchRequest));
      });
    this.searchTitle = "Please select a location below:";
  }

  private currentPlace(item): void {
    this.searchResultService.location = item.location;
    this.searchResultService.currentList = item.result;
    this.router.navigate(['/result']);
  }

  private faves(): void {
    this.router.navigate(['/faves']);
  }
}

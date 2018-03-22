import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultService } from '../searchResult.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Result } from '../result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchRequest: any[];
  private inputControl: any;

  constructor(private searchResultService: SearchResultService, private router: Router) {
  }
  ngOnInit() {
    this.inputControl = new FormControl();
    this.searchRequest = JSON.parse(localStorage.getItem('request'));
  }
  go() {
    this.searchResultService.getNumRes(this.inputControl.value)
      .subscribe((data) => {
        if(data.length>5){
          data.splice(0, 1)
        }
        this.searchRequest = data;
        localStorage.setItem('request', JSON.stringify(this.searchRequest)); 
        console.log(this.searchRequest);
      });
  }
  private currentPlace(item) {
    this.searchResultService.location=item.location;
    this.searchResultService.currentList = item.result;
    this.router.navigate(['/result']);
  }
  private faves() {
    this.router.navigate(['/faves']);
  }
}

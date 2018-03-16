import { Output, Input, Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { FormControl } from '@angular/forms';
import { EventEmitter } from 'selenium-webdriver';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchRequest = [];
  private inputControl: any;
  constructor(private searchResultService: SearchResultService) { }
  public setValue() {
    this.searchResultService.myValue = this.inputControl.value;
  }
  ngOnInit() {
    this.inputControl = new FormControl();
    this.inputControl;
  }
  go() {
    this.setValue();
    this.searchRequest.push(this.inputControl.value);
  }
}

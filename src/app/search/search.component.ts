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
  public inputValue: string;
  constructor(private searchResultService: SearchResultService) { }
  public setValue() {
    this.searchResultService.myValue = this.inputValue;
  }
  ngOnInit() {
    // this.searchResultService.getInfo()
    //   .subscribe(search => console.log(search));
    this.inputControl = new FormControl();
    this.inputControl.valueChanges.subscribe(
      value => { this.inputValue = value });
    // console.log(this.searchResultService.myValue);
  }
  go(){
  this.setValue();
  this.searchRequest.push(this.inputValue);
  console.log(this.inputValue)
  }
}

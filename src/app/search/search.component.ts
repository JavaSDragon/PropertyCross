import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchResultService } from '../searchResult.service';
import { FormControl, Validator, Validators, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { filter, map } from 'rxjs/operators';
import { FlatsResult } from '../result';
import { ItemResult } from '../result';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private searchRequest: any[] = [];
  private inputControl: any;
  private searchTitle: string = "Recent searches:";
  public messages: any = {
    message: "test",
    getMessages(): any {
      this.message = "test_1"
      console.log(this.message);
    }
  }

  constructor(private searchResultService: SearchResultService, private router: Router) {
  }

  public ngOnInit(): void {
    this.inputControl = new FormControl('',
      [
        Validators.pattern(/[A-z]/),
        this.validatorMesagges
      ]);
    if (JSON.parse(localStorage.getItem('request'))) {
      this.searchResultService.listings = JSON.parse(localStorage.getItem('request'));
    }
    this.searchRequest = this.searchResultService.listings;
  }

  public validatorMesagges = (control: FormControl):any => {
    let value=control.value;
    console.log(value, this.messages.getMessages());
    if(value.search(/[А-я]/i)===0){
    // let a= this.messages.getMessages.bind(this.messages);
    //  console.log(a);
      }
      return null;
    }

  public go(): void {
    if (this.inputControl.invalid) {
      return;
    }
    
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
  public currentPlace(item: ItemResult): void {
    this.searchResultService.location = item.location;
    this.searchResultService.currentList = item.result;
    this.router.navigate(['/result']);
  }

  public faves(): void {
    this.router.navigate(['/faves']);
  }
}

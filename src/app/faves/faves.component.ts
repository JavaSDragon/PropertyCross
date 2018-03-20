import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.css']
})
export class FavesComponent implements OnInit {
 private favesList:any[];
  constructor(private searchResultService: SearchResultService,private location: Location) { }

  ngOnInit() {
    this.favesList=this.searchResultService.faves;
  }
  back() {
    this.location.back();
  }
}
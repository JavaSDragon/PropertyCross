import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.css']
})
export class FavesComponent implements OnInit {
  private favesList: any[];
  constructor(private searchResultService: SearchResultService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.searchResultService.faves = JSON.parse(localStorage.getItem('faves'));
    this.favesList = this.searchResultService.faves;
  }
  back() {
    this.router.navigate(['/search']);
  }
  private goDetail(item){
    this.searchResultService.detail = item;
    this.router.navigate(['/detail']);
  }
}

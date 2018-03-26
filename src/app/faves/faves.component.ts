import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Router } from '@angular/router';
import { ItemResult,FlatsResult } from '../result';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.css']
})
export class FavesComponent implements OnInit {

  private favesList: FlatsResult[] = [];

  constructor(private searchResultService: SearchResultService, private router: Router) { }

  public ngOnInit(): void {
    if (JSON.parse(localStorage.getItem('faves'))) {
      this.searchResultService.faves = JSON.parse(localStorage.getItem('faves'));
    }
    this.favesList = this.searchResultService.faves;
  }

  public home(): void {
    this.router.navigate(['/search']);
  }

  public goDetail(item: ItemResult): void {
    this.searchResultService.detail = item;
    this.router.navigate(['/detail']);
  }
}

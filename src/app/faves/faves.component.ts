import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Router } from '@angular/router';
import { itemResult } from '../itemResult';

@Component({
  selector: 'app-faves',
  templateUrl: './faves.component.html',
  styleUrls: ['./faves.component.css']
})
export class FavesComponent implements OnInit {

  private favesList: any[];

  constructor(private searchResultService: SearchResultService, private router: Router) { }

  public ngOnInit(): void {
    this.searchResultService.faves = JSON.parse(localStorage.getItem('faves'));
    this.favesList = this.searchResultService.faves;
  }

  private home(): void {
    this.router.navigate(['/search']);
  }

  private goDetail(item: itemResult): void {
    this.searchResultService.detail = item;
    this.router.navigate(['/detail']);
  }
}

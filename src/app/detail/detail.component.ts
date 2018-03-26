import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Router } from '@angular/router';
import { FlatsResult } from '../result';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailComponent implements OnInit {
  private detailList: FlatsResult;
  private buttonValue: string = "+";
  private position: number;
  constructor(private searchResultService: SearchResultService, private router: Router) { }

  public ngOnInit(): void {
    this.detailList = this.searchResultService.detail;
    this.checkList();
  }

  public back(): void {
    this.router.navigate(['/result']);
  }

  public goFaves(): void {
    this.router.navigate(['/faves']);
  }

  public addFaves(): void {
    if (this.buttonValue === "+") {
      this.searchResultService.faves.push(this.detailList)
    } else {
      this.searchResultService.faves.splice(this.position, 1);
    }
    this.buttonValue = this.buttonValue === "+" ? "-" : "+"
    localStorage.setItem('faves', JSON.stringify(this.searchResultService.faves));
  }

  private checkList(): void {
    this.searchResultService.faves.forEach((elem, i) => {
      if (this.detailList.title == elem.title) {
        this.buttonValue = "-";
        this.position = i;
      }
    });
  }
}

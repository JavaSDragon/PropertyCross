import { Component, OnInit } from '@angular/core';
import { SearchResultService } from '../searchResult.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private detailList: any;
  private buttonValue: any = "+";
  private position: number;
  constructor(private searchResultService: SearchResultService, private router: Router) { }

  public ngOnInit(): void {
    this.detailList = this.searchResultService.detail;
    this.checkList();
  }

  private back(): void {
    this.router.navigate(['/result']);
  }

  private goFaves(): void {
    this.router.navigate(['/faves']);
  }

  private addFaves(): void {
    if (this.buttonValue === "+") {
      this.searchResultService.faves.push(this.detailList)
      localStorage.setItem('faves', JSON.stringify(this.searchResultService.faves));
      this.buttonValue === "+" ? this.buttonValue = "-" : this.buttonValue = "+";
    }
    else {
      this.searchResultService.faves.splice(this.position, 1);
      localStorage.setItem('faves', JSON.stringify(this.searchResultService.faves));
      this.buttonValue === "-" ? this.buttonValue = "+" : this.buttonValue = "-";
    }
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

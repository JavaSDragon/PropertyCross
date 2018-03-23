import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Result } from './result';
import { SearchComponent } from './search/search.component';


@Injectable()
export class SearchResultService {

  public searchList = [];
  public currentList: any;
  public detail: any;
  public listings: any[] = [];
  public faves: any[] = [];
  public detailList: any;
  public location: string;

  constructor(private http: HttpClient) { }

  public getNumRes(search: string): Observable<any> {
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${search}`)
      .map(({ response: { total_results, total_pages, listings, created_http }, request: { location } }: any) => this.mapListings(listings, { time: created_http, location, count: total_results }))
  }

  private mapListings(listings: any[], { time, location, count: total_results }: any): any[] {
    this.listings = [...this.listings,
    {
      result: listings.map(({ img_url: imgUrl, price, title, price_currency: priceCurrency, summary, bedroom_number: bedroomNumber }: any) => ({
        imgUrl,
        price,
        title,
        priceCurrency,
        summary,
        bedroomNumber
      })),
      total_results,
      location
    }]
    return this.listings;
  }

  public getPage(page): Observable<Result[]> {
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${page}&place_name=${this.location}`)
      .map(({ response: listings }: any) => listings)
      .map(({ listings }: any) => (
        listings.map(({ img_url: imgUrl, price, title, price_currency: priceCurrency }: any) => ({
          imgUrl,
          price,
          title,
          priceCurrency
        })
        )))
  }
}
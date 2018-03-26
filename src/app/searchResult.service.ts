import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { FlatsResult } from './result';
import { SearchComponent } from './search/search.component';
import { Listings } from './listings';


@Injectable()
export class SearchResultService {

  public searchList: FlatsResult[];
  public currentList: FlatsResult[];
  public detail: FlatsResult;
  public listings: Listings[] = [];
  public faves: FlatsResult[] = [];
  public detailList: FlatsResult[];
  public location: string;

  constructor(private http: HttpClient) { }

  public getNumRes(search: string): Observable<FlatsResult[]> {
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=${search}`)
      .map(({ response: { total_results, total_pages, listings, created_http }, request: { location } }: any) => this.mapListings(listings, { time: created_http, location, count: total_results }))
  }

  private mapListings(listings: FlatsResult[], { location, count: total_results }: any): any[] {
    this.listings = [...this.listings,
    {
      result: listings.map(({ img_url: imgUrl, price, title, price_currency: priceCurrency, summary, bedroom_number: bedroomNumber }: FlatsResult) => ({
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

  public getPage(page): Observable<FlatsResult[]> {
    return this.http.get(`https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=${page}&place_name=${this.location}`)
      .map(({ response: listings }: any) => listings)
      .map(({ listings }: any) => (
        listings.map(({ img_url: imgUrl, price, title, price_currency: priceCurrency }: FlatsResult) => ({
          imgUrl,
          price,
          title,
          priceCurrency
        })
        )))
  }
}
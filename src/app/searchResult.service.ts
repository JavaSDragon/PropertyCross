import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Result } from './result';

const leedsUrl='https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds';
const newcrUrl='https://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=newcr';

@Injectable()
export class SearchResultService {

  constructor(private http: HttpClient) { }

  getInfo(): Observable<Result[]> {
    return this.http.get(leedsUrl)
      .map(({response: listings}: any) => listings)
      .map(({listings}: any) => (
        listings.map(({img_url: imgUrl, price, title,price_currency: priceCurrency}: any) => ({
          imgUrl,
          price,
          title,
          priceCurrency
        })
      )))
    }
  }
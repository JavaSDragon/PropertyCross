export interface FlatsResult {
    img_url: string;
    price: number;
    title: string;
    price_currency: string;
    summary: string;
    bedroom_number: number;
    total_results: number;
    location: string;
}

export interface Listings {
    result: Array<object>
    total_results: number;
    location: string;
}

export interface ItemResult {
    result: Array<FlatsResult>;
    location: string;
    img_url: string;
    price: number;
    title: string;
    price_currency: string;
    summary: string;
    bedroom_number: number;
    total_results: number;
}

export interface ReqSet {
    location: string;
    count: number;
}

export interface ReqGet {
    response: string;
}

export interface Listing_1 {
    // value:string;
    // index:number;
    listings:FlatsResult;
}


import { FlatsResult } from './result';
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
import { FlatsResult } from './result';

export interface Listings {
    result: Array<object>
    total_results: number;
    location: string;
}
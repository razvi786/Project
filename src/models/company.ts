import { ListedIn } from './listed-in';

export class Company{
    id:number;
    name: string;
    turnover:number;
    ceo:string;
    directors:string[];
    listedIn:ListedIn[];
    sector:string;
    brief:string;
    activated:boolean;
}
export class StockPrice {
  id: number;
  company_code: number;
  stock_exchange: string;
  current_price: number;
  date: string;
  time: string;
}

export class StockPriceData {
  companyCode: string;
  stockExchange: string;
  dataPoint: string;
  dataValue: string;
}

export class CompareFormData {
  company1: string;
  company2: string;
  from: Date;
  to:Date;
  periodicity:string;
}
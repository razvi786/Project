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
  stock_exchange: string;
  company1: string;
  company2: string;
  from: Date;
  to:Date;
  periodicity:string;
}

export class CompanyNameStock {
  company_name: string;
  stock_code: string;
}
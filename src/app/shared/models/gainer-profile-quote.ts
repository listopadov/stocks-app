export class GainerProfileQuote {
  constructor(public latestVolume: number,
              public week52High: number,
              public week52Low: number,
              public open: number,
              public previousClose: number,
              public avgTotalVolume: number,
              public marketCap: number,
              public latestSource: number,
              public latestUpdate: number,
              public latestPrice: number,
              public priceChange: number,
              public changePercent: number) {
  }
}

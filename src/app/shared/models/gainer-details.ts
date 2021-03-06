export class GainerDetails {
  // todo rev: RV-C1 16.03.2019 08:56
  // todo Andrey: this constructor is too complicated
  // check https://refactoring.guru/design-patterns/catalog -> Creational patterns
  constructor(public symbol: string,
              public companyName: string,
              public description: string,
              public sector: string,
              public industry: string,
              public website: string,
              public latestVolume: number,
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
              public changePercent: number,
              public urlImage: string) {
  }
}

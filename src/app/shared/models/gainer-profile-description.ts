export class GainerProfileDescription {
  // todo rev: RV-C1 16.03.2019 09:02
  // todo Andrey: this constructor is too complicated
  // check https://refactoring.guru/design-patterns/catalog -> Creational patterns
  constructor(public symbol: string,
              public companyName: string,
              public description: string,
              public sector: string,
              public industry: string,
              public website: string) {
  }
}

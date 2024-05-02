type CoinDenominations = number[];

export enum Currency {
  BritishPound = 'BritishPound',
  USDollar = 'USDollar'
}

export const CoinDenominationsMap: Record<Currency, CoinDenominations> = {
  [Currency.BritishPound]: [1, 2, 5, 10, 20, 50],
  [Currency.USDollar]: [1, 5, 10, 25],
};

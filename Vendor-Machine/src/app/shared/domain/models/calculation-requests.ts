import { CalculationRequest } from '../interfaces/calculation-request';

export class CalculationRequests implements CalculationRequest {
  purchaseAmount: number;
  tenderAmount: number;
  coinDenominations: number[];

  constructor() {
    this.coinDenominations = [1, 5, 10, 25];
    this.purchaseAmount = 1.35;
    this.tenderAmount = 2.0;
  }
}

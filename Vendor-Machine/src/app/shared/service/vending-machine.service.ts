import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { CalculationRequest } from '../domain';

@Injectable({
  providedIn: 'root',
})
export class VendingMachineService {
  constructor(private http: HttpClient) {}

  calculateChange(calculateChange: CalculationRequest): Observable<any> {
    const url = `${environment.baseUrl}/VendingMachine/calculateChange`;
    //const data = { purchaseAmount, tenderAmount };
    return this.http.post<any>(url, calculateChange);
  }
}

import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CountriesService, VendingMachineService } from '@app/shared/service';

import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { CalculationRequests, Country } from '@app/shared/domain';
import { RippleModule } from 'primeng/ripple';
import { DropdownModule } from 'primeng/dropdown';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-vending-machine',
  templateUrl: './vending-machine.component.html',
  styleUrls: ['./vending-machine.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    RippleModule,
    DropdownModule,
    ChipModule
  ],
  providers: [VendingMachineService, CountriesService, CurrencyPipe],
})
export class VendingMachineComponent implements OnInit {
  calculationRequest: CalculationRequests = new CalculationRequests();
  change!: number[];

  countries: Country[] = [];

  selectedCountry: Country = {
    name: 'US Dollar',
    code: 'USD',
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png',
  };

  constructor(
    private vendingMachineService: VendingMachineService,
    private countriesService: CountriesService,
    private currencyPipe: CurrencyPipe
  ) {
    this.getCountries();
    this.calculateChange();
  }

  ngOnInit() {}

  changeCoinDenominations() {
    if (this.selectedCountry.code === 'USD') {
      this.calculationRequest.coinDenominations = [1, 5, 10, 25];
    }else{
      this.calculationRequest.coinDenominations = [1, 2, 5, 10, 20, 50];
    }
  }

  getCurrencySymbol(coin: number): string
  {
    return this.currencyPipe.transform(coin, this.selectedCountry.code) || `$ ${coin}`;
  }

  getCountries() {
    this.countriesService.getCountries().subscribe((data: any) => {
      this.countries = data;
    });
  }

  calculateChange() {
    this.vendingMachineService
      .calculateChange(this.calculationRequest)
      .subscribe((change) => (this.change = change));
  }
}

import { Injectable } from '@angular/core';
import { Country } from '../domain';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor() {}

  getCountries(): Observable<Country[]> {
    return of([
      {
        name: 'British Pound',
        code: 'GBP',
        image:
          'https://cdn.pixabay.com/photo/2015/11/06/13/29/union-jack-1027898_1280.jpg',
      },
      {
        name: 'US Dollar',
        code: 'USD',
        image:
          'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png',
      },
    ]);
  }
}

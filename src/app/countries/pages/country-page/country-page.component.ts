import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.services';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { DecimalPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [NgIf, DecimalPipe],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  public country?: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchCountryByAlphaCode(id)),
      )
      .subscribe(country => {

        if (!country) {
          return this.router.navigateByUrl('by-capital')
        }
        this.country = country;

        return
      });

  }
}

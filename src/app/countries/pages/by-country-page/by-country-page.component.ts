import { Component, OnInit } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.services';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent, LoadingSpinnerComponent,NgIf]
})
export class ByCountryPAgeComponent implements OnInit {


    ngOnInit(): void {
        this.countries = this.countriesService.cacheStore.byCountries.countries
        this.initialValue = this.countriesService.cacheStore.byCountries.term
    }
    public isLoading:boolean=false;
    public initialValue: string = '';
    public countries: Country[] = [];
    constructor(private countriesService: CountriesService) { }

    searchByCountry(term: string) {
        this.isLoading=true;
        this.countriesService.searchCountry(term).subscribe(countries => {
            this.countries = countries
            this.isLoading=false;
        })
    }
}

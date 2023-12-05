import { Component, OnInit, isStandalone } from '@angular/core';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.services';
import { NgFor, NgIf } from '@angular/common';
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";



@Component({
    selector: 'app-by-capital-page',
    standalone: true,
    templateUrl: './by-capital-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, NgFor,NgIf, CountryTableComponent, LoadingSpinnerComponent]
})
export class ByCapitalPAgeComponent implements OnInit {


    ngOnInit(): void {
        this.countries = this.countriesService.cacheStore.byCapital.countries
        this.initialValue = this.countriesService.cacheStore.byCapital.term
    }
    public initialValue:string='';
    public countries: Country[] = [];
    public isLoading:boolean=false;
    constructor(private countriesService: CountriesService) { }
   

    searchBycapital(term: string) {
        this.isLoading=true;
        this.countriesService.searchCapital(term).subscribe(countries => {
            this.countries = countries
            this.isLoading=false;
        })
    }

}

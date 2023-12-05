import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.services';
import { SearchBoxComponent } from "../../../shared/components/search-box/search-box.component";
import { CountryTableComponent } from "../../components/country-table/country-table.component";
import { NgClass, NgIf } from '@angular/common';
import { Region } from '../../interfaces/region.type';
import { LoadingSpinnerComponent } from "../../../shared/components/loading-spinner/loading-spinner.component";


@Component({
  selector: 'app-by-region-page',
  standalone: true,
  templateUrl: './by-region-page.component.html',
  styles: ``,
  imports: [SearchBoxComponent, CountryTableComponent, NgClass, LoadingSpinnerComponent, NgIf]
})
export class ByRegionPAgeComponent implements OnInit{

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region
  }
  public initialValue: string = '';
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  public selectedRegion?: Region;
  constructor(private countriesService: CountriesService) { }

  searchByRegion(region: Region) {
    this.isLoading = true;
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(countries => {
      this.countries = countries
      this.isLoading = false;
    })
  }
}

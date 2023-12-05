import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { NgFor, NgIf, DecimalPipe} from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'countries-table',
  standalone: true,
  imports: [NgIf,NgFor,DecimalPipe, RouterLink],
  templateUrl: './country-table.component.html',
  styles: `img{
    width:25px;
  }`
})
export class CountryTableComponent {

  @Input()
  public countries: Country[]=[];

}

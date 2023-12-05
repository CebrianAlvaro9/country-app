import { Routes } from '@angular/router';
import { ByCapitalPAgeComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPAgeComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionPAgeComponent } from './pages/by-region-page/by-region-page.component';
import {  CountryPageComponent } from './pages/country-page/country-page.component';


export const routes: Routes = [
    {
        path: 'by-capital',
        component: ByCapitalPAgeComponent
    },
    {
        path: 'by-country',
        component: ByCountryPAgeComponent
    }
    , {
        path: 'by-region',
        component: ByRegionPAgeComponent
    }
    , {
        path: 'by-capital',
        component: ByCapitalPAgeComponent
    }, {
        path: 'by/:id',
        component: CountryPageComponent
    }
    , {
        path: '**',
        redirectTo: 'by-capital'
    }
];

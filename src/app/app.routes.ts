import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

export const routes: Routes = [
{
    path:'countries',
    loadChildren: ()=>import('./countries/countries.routes').then(m=>m.routes)
},
{
    path:'**',
    redirectTo:'countries'
}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/aboutus/aboutus.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { MainCarDetailsComponent } from './Pages/main-car-details/main-car-details.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutUsComponent, data: { breadcrumb: 'About Us' }},
    {path: "services", component: ServiceComponent, data: { breadcrumb: 'Services' }},
    {path: "contact", component: ContactComponent, data: { breadcrumb: 'Contact Us'}},
    {path: "car-details", component: MainCarDetailsComponent, data: {breadcrumb: "Car Details"}}
];

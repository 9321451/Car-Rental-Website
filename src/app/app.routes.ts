import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { AboutUsComponent } from './Pages/aboutus/aboutus.component';
import { ServiceComponent } from './Pages/service/service.component';
import { ContactComponent } from './Pages/contact/contact.component';
export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "about", component: AboutUsComponent, data: { breadcrumb: 'About Us' }},
    {path: "services", component: ServiceComponent, data: { breadcrumb: 'Services' }},
    {path: "contact", component: ContactComponent, data: { breadcrumb: 'Contact Us'}}
];

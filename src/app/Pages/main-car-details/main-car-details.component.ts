import { Component } from '@angular/core';
import { CardetailsComponent } from '../../Components/cardetails/cardetails.component';
import { HeropageComponent } from "../../Components/heropage/heropage.component";

@Component({
  selector: 'app-main-car-details',
  imports: [ CardetailsComponent, HeropageComponent],
  templateUrl: './main-car-details.component.html',
  styleUrl: './main-car-details.component.css'
})
export class MainCarDetailsComponent {
     ngOnInit(): void {
    window.scrollTo(0, 0); // 👈 scroll to top when ServicesComponent loads
  }
}

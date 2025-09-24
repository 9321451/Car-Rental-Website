import { NgFor} from '@angular/common';
import { Component} from '@angular/core';
import { AnimatedTextDirective } from "../../Directives/animat-text.directive";

@Component({
  selector: 'app-fleet',
  imports: [NgFor, AnimatedTextDirective],
  templateUrl: './fleet.component.html',
  styleUrl: './fleet.component.css'
})
export class FleetComponent {

  currentIndex = 0;

  fleet = [
    {
      name: 'Luxury Sedan',
      type: 'Sedan',
      doors: 4,
      passengers: 4,
      rent: '$80/day',
      image: 'assets/images/Breeze-Compact.png'
    },
    {
      name: 'SUV',
      type: 'SUV',
      doors: 5,
      passengers: 7,
      rent: '$120/day',
      image: 'assets/images/Sapphire-Convertible.png'
    },
    {
      name: 'Convertible',
      type: 'Convertible',
      doors: 2,
      passengers: 2,
      rent: '$150/day',
      image: 'assets/images/Viper-SXT.png'
    },
    {
      name: 'Luxury Sedan',
      type: 'Sedan',
      doors: 4,
      passengers: 4,
      rent: '$80/day',
      image: 'assets/images/Harrier-Wagon.png'
    },
    {
      name: 'Luxury Sedan',
      type: 'Sedan',
      doors: 4,
      passengers: 4,
      rent: '$80/day',
      image: 'assets/images/Eclipse-Sedan.png'
    },
    {
      name: 'Luxury Van',
      type: 'Van',
      doors: 4,
      passengers: 8,
      rent: '$200/day',
      image: 'assets/images/Voyager-GT.png'
    },
    {
      name: 'Sports Car',
      type: 'Coupe',
      doors: 2,
      passengers: 2,
      rent: '$250/day',
      image: 'assets/images/Voyager-Hybrid.png'
    }
  ];
  cardWidth = 100/4;

  // Show 4 cards at a time
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.fleet.length - 4) {
      this.currentIndex++;
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * this.cardWidth}%)`;
  }
   
  
}

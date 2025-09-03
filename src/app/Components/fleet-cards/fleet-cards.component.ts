import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [NgClass, NgFor],
  selector: 'app-fleet-cards',
  templateUrl: './fleet-cards.component.html',
  styleUrls: ['./fleet-cards.component.css']
})
export class FleetCardsComponent {
  cars = [
    {
      title: 'Sport Car',
      image: 'assets/images/card.webp',
      iconClass: 'bi bi-box-arrow-up-right',
      btnClass: 'bg-orange'
    },
    {
      title: 'Convertible Car',
      image: 'assets/images/card1.jpg',
      iconClass: 'bi bi-box-arrow-up-right',
      btnClass: 'bg-orange'
    },
    {
      title: 'Sedan Car',
      image: 'assets/images/card2.jpg',
      iconClass: 'bi bi-box-arrow-up-right',
      btnClass: 'bg-orange'
    },
    {
      title: 'Luxury Car',
      image: 'assets/images/card3.jpg',
      iconClass: 'bi bi-box-arrow-up-right',
      btnClass: 'bg-orange'
    }
  ];

  
}

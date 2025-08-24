import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-services',
  imports: [NgFor, NgClass],
  templateUrl: './all-services.component.html',
  styleUrl: './all-services.component.css'
})
export class AllServicesComponent {
    services = [
      {
        title: 'Car Rental With Driver',
        description: 'Providing professional drivers for your car rental needs.',
        icon: 'bi bi-car-front-fill'
      },
      {
        title: 'Business Car Rental',
        description: 'Providing rental cars for business purposes with professional drivers.',
        icon: 'bi bi-briefcase-fill'
      },
      {
        title: 'Airport Transfer',
        description: 'Providing seamless airport transfer services with professional drivers.',
        icon: 'bi bi-airplane-engines-fill'
      },
      {
        title: 'Chauffeur Services',
        description: 'Providing professional chauffeurs for your transportation needs.',
        icon: 'bi bi-person-badge-fill'
      },

      {
        title: 'Private Transfer',
        description: 'Travel with privacy and comfort, tailored to your schedule.',
        icon: 'bi bi-geo-alt-fill'
      },
      {
        title: 'VIP Transfer',
        description: 'Premium service with luxury vehicles and top-class comfort',
        icon: 'bi bi-star-fill'
      },
      {
        title: 'Roadside Assistance',
        description: 'Providing professional roadside assistance for your vehicle needs.',
        icon: 'bi bi-tools'
      },
      {
        title: 'Event Transportation',
        description: 'Reliable transport solutions for weddings, parties, and events.',
        icon: 'bi bi-calendar-event-fill'
      },

    ]
}

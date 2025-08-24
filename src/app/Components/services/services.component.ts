import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [NgFor, NgClass, RouterLink],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
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

    ]
}

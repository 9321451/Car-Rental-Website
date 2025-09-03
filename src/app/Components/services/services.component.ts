import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [NgFor, NgClass, RouterLink, NgIf],
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

     @Input() animationClass: string = 'animate__fadeInRight';
  animatedTextVisible = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, 'not-visible'); // hide initially

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animatedTextVisible = true;
          this.renderer.removeClass(this.el.nativeElement, 'not-visible');
          observer.unobserve(this.el.nativeElement); // trigger once
        }
      });
    }, { threshold: 0.2 });

    observer.observe(this.el.nativeElement);
  }

   ngAfterViewInit(): void {
  const cards = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        const animationClass = target.getAttribute('data-animation') || 'animate__fadeInUp';
        target.classList.add('animate__animated', animationClass);
        target.style.opacity = '1';
        target.style.visibility = 'visible';
        observer.unobserve(target); // animate once
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach(card => observer.observe(card));
}
}

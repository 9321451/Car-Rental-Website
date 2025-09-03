import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  imports: [NgStyle],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
    images: string[] = [
    'assets/hero.webp',
    'assets/hero1.webp',
    'assets/hero2.webp'
  ];
  
  currentImage: string = this.images[0];
  private index: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.index = (this.index + 1) % this.images.length;
      this.currentImage = this.images[this.index];
    }, 10000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngAfterViewInit(): void {
      const options = {
        strings: ['Rent in Style.', 'Drive in Comfort.', 'Explore with NovaRide.'],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
      };
  
      new Typed('.typed-text', options);
    }
}

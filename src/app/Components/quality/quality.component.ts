import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-quality',
  imports: [NgFor, NgIf],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export class QualityComponent {
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

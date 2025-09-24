import { input } from "@angular/core";
import { Directive, AfterViewInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appAnimatOnScroll]',
  standalone: true
})
export class AnimateOnScrollDirective implements AfterViewInit {
  @Input('appAnimateOnScroll') animationClass: string = 'animate__fadeInUp';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'hidden');
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'animate__animated');
          this.renderer.addClass(this.el.nativeElement, this.animationClass);
          this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
          this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
          observer.unobserve(this.el.nativeElement); // run once
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.el.nativeElement);
  }
}

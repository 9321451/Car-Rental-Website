import { Directive, AfterViewInit, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimatText]',
  standalone: true
})
export class AnimatedTextDirective implements AfterViewInit {
  @Input('appAnimatedText') animationClass: string = 'animate__fadeInRight';
  @Input() delayStep: number = 0.05; // seconds per character

  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {
    // keep element visible (we animate chars individually)
    this.renderer.setStyle(this.el.nativeElement, 'visibility', 'visible');
  }

  ngAfterViewInit(): void {
    const root = this.el.nativeElement;
    const originalHTML = root.innerHTML;
    // clear content — we'll rebuild it with spans on intersection
    root.innerHTML = '';

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        let delay = 0;

        // temp container to parse original HTML reliably (attributes preserved)
        const temp = document.createElement('div');
        temp.innerHTML = originalHTML;

        // recursive node processor that appends to `parent` using Renderer2
        const processNode = (node: ChildNode, parent: HTMLElement | Element) => {
          if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent || '';
            for (const ch of text) {
              const span = this.renderer.createElement('span');
              const char = ch === ' ' ? '\u00A0' : ch;               // preserve spaces
              this.renderer.appendChild(span, this.renderer.createText(char));
              this.renderer.addClass(span, 'animate__animated');
              this.renderer.addClass(span, this.animationClass);
              this.renderer.setStyle(span, 'animationDelay', `${delay}s`);
              this.renderer.setStyle(span, 'display', 'inline-block'); // helps animation transform
              this.renderer.appendChild(parent, span);
              delay += this.delayStep;
            }
          } else if (node.nodeType === Node.ELEMENT_NODE) {
            const elNode = node as Element;
            // handle <br> (Angular may add attributes but tagName stays BR)
            if (elNode.tagName === 'BR') {
              const br = this.renderer.createElement('br');
              this.renderer.appendChild(parent, br);
              delay = 0; // reset per-line delay (optional)
              return;
            }

            // For other element nodes (e.g., <strong>, <span>), recreate same tag and copy attributes
            const newEl = this.renderer.createElement(elNode.tagName.toLowerCase());
            // copy attributes so styling like <strong> or classes remain
            Array.from(elNode.attributes).forEach(attr => {
              this.renderer.setAttribute(newEl, attr.name, attr.value);
            });

            // recurse into children of this element
            Array.from(elNode.childNodes).forEach(child => processNode(child, newEl));
            this.renderer.appendChild(parent, newEl);
          }
        };

        // process top-level children
        Array.from(temp.childNodes).forEach(child => processNode(child, root));

        observer.unobserve(root); // animate once
      });
    }, { threshold: 0.2 });

    observer.observe(root);
  }}

import { Component } from '@angular/core';
import { AnimatedTextDirective } from "../../Directives/animat-text.directive";
import { AnimateOnScrollDirective } from "../../Directives/animat-on-scroll.directive";

@Component({
  selector: 'app-quality',
  imports: [AnimatedTextDirective, AnimateOnScrollDirective],
  templateUrl: './quality.component.html',
  styleUrl: './quality.component.css'
})
export class QualityComponent {
}

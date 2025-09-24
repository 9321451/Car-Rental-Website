
import { Component } from '@angular/core';
import { AnimatedTextDirective } from "../../Directives/animat-text.directive";
import { AnimateOnScrollDirective } from "../../Directives/animat-on-scroll.directive";

@Component({
  selector: 'app-process',
  imports: [AnimatedTextDirective, AnimateOnScrollDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {
 
}

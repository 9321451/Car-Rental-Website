
import { Component} from '@angular/core';
import { AnimateOnScrollDirective } from "../../Directives/animat-on-scroll.directive";
import { AnimatedTextDirective } from "../../Directives/animat-text.directive";

@Component({
  imports: [ AnimateOnScrollDirective, AnimatedTextDirective],
  selector: 'app-cta-banner',
  templateUrl: './cta-banner.component.html',
  styleUrls: ['./cta-banner.component.css']
})
export class CtaBannerComponent {
  
}

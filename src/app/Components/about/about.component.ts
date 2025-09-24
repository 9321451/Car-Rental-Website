
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedTextDirective } from '../../Directives/animat-text.directive';
import { AnimateOnScrollDirective } from "../../Directives/animat-on-scroll.directive";


@Component({
  selector: 'app-about',
  imports: [RouterLink, AnimatedTextDirective, AnimateOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent{
  
}

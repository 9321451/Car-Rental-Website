import { Component } from '@angular/core';
import { HeropageComponent } from "../../Components/heropage/heropage.component";
import { AboutComponent } from '../../Components/about/about.component';
import { QualityComponent } from "../../Components/quality/quality.component";
import { TestemonialsComponent } from "../../Components/testemonials/testemonials.component";

@Component({
  selector: 'app-aboutus',
  imports: [HeropageComponent, AboutComponent, QualityComponent, TestemonialsComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutUsComponent {

}

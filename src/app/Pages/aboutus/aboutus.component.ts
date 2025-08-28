import { Component } from '@angular/core';
import { HeropageComponent } from "../../Components/heropage/heropage.component";
import { AboutComponent } from '../../Components/about/about.component';
import { QualityComponent } from "../../Components/quality/quality.component";
import { TestemonialsComponent } from "../../Components/testemonials/testemonials.component";
import { CtaBannerComponent } from "../../Components/cta-banner/cta-banner.component";

@Component({
  selector: 'app-aboutus',
  imports: [HeropageComponent, AboutComponent, QualityComponent, TestemonialsComponent, CtaBannerComponent],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutUsComponent {
    ngOnInit(): void {
    window.scrollTo(0, 0); // 👈 scroll to top when ServicesComponent loads
  }
}

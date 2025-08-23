import { Component } from '@angular/core';
import { HeroComponent } from '../../Components/hero/hero.component';
import { AboutComponent } from "../../Components/about/about.component";
import { ServicesComponent } from '../../Components/services/services.component';
import { FleetComponent } from "../../Components/fleet/fleet.component";
import { ProcessComponent } from "../../Components/process/process.component";
import { QualityComponent } from '../../Components/quality/quality.component';
import { FleetCardsComponent } from "../../Components/fleet-cards/fleet-cards.component";
import { TestemonialsComponent } from '../../Components/testemonials/testemonials.component';
import { CtaBannerComponent } from '../../Components/cta-banner/cta-banner.component';
@Component({
  selector: 'app-home',
  imports: [CtaBannerComponent, TestemonialsComponent, HeroComponent, AboutComponent, QualityComponent, ServicesComponent, FleetComponent, ProcessComponent, FleetCardsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

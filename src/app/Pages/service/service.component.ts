import { Component } from '@angular/core';
import { AllServicesComponent } from "../../Components/all-services/all-services.component";
import { HeropageComponent } from "../../Components/heropage/heropage.component";
import { TestemonialsComponent } from "../../Components/testemonials/testemonials.component";

@Component({
  selector: 'app-service',
  imports: [AllServicesComponent, HeropageComponent, TestemonialsComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
   ngOnInit(): void {
    window.scrollTo(0, 0); // 👈 scroll to top when ServicesComponent loads
  }
}

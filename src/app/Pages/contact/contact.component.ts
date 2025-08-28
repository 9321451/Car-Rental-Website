import { Component } from '@angular/core';
import { ContactUsComponent } from "../../Components/contact-us/contact-us.component";
import { HeropageComponent } from '../../Components/heropage/heropage.component';
import { TestemonialsComponent } from "../../Components/testemonials/testemonials.component";


@Component({
  selector: 'app-contact',
  imports: [ContactUsComponent, HeropageComponent, TestemonialsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   ngOnInit(): void {
    window.scrollTo(0, 0); // 👈 scroll to top when ServicesComponent loads
  }
}  

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [NgIf, FormsModule],
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  formStatus: 'success' | 'error' | null = null;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.formStatus = 'success';
      // ✅ here you can send via EmailJS or API
      form.reset();
    } else {
      this.formStatus = 'error';
    }
  }

  showSuccess = false;
  showError = false;

  validateForm() {
    const firstName = (document.querySelector('input[placeholder="Enter Your Name"]') as HTMLInputElement)?.value.trim();
    const lastName = (document.querySelectorAll('input[placeholder="Enter Your Name"]')[1] as HTMLInputElement)?.value.trim();
    const email = (document.querySelector('input[placeholder="Enter Your Email"]') as HTMLInputElement)?.value.trim();
    const phone = (document.querySelector('input[placeholder="Enter Your Number"]') as HTMLInputElement)?.value.trim();
    const message = (document.querySelector('textarea') as HTMLTextAreaElement)?.value.trim();

    if (firstName && lastName && email && phone && message) {
      this.showSuccess = true;
      this.showError = false;
    } else {
      this.showError = true;
      this.showSuccess = false;
    }
  }
}

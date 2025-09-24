import { NgFor} from '@angular/common';
import { Component} from '@angular/core';
import { AnimatedTextDirective } from "../../Directives/animat-text.directive";

@Component({
  selector: 'app-testemonials',
  imports: [NgFor, AnimatedTextDirective],
  templateUrl: './testemonials.component.html',
  styleUrl: './testemonials.component.css'
})
export class TestemonialsComponent {
   currentIndex = 0;

  reviews = [
  {
    name: "Leslie Alexander",
    role: "Project Manager",
    image: "assets/guy1.jpeg",
    rating: 5,
    feedback: "Renting a car from Nova Ride was a great decision. Not only did I get a reliable and comfortable vehicle, but the prices were also very competitive."
  },
  {
    name: "Michael Johnson",
    role: "Software Engineer",
    image: "assets/images/person.webp",
    rating: 4,
    feedback: "Booking was quick and easy, and the car was in excellent condition. Highly recommend Nova Ride!"
  },
  {
    name: "Sophia Williams",
    role: "Marketing Specialist",
    image: "assets/images/girl1.webp",
    rating: 5,
    feedback: "Amazing experience! The pickup and drop-off were super convenient, and the staff was very friendly."
  },
  {
    name: "James Smith",
    role: "Business Analyst",
    image: "assets/images/person1.webp",
    rating: 4,
    feedback: "Smooth process overall. The car was clean and fuel-efficient, perfect for my trip."
  },
  {
    name: "Emily Davis",
    role: "UI/UX Designer",
    image: "assets/images/girl2.webp",
    rating: 5,
    feedback: "I loved how easy the entire process was. Definitely going to use Nova Ride again for future trips."
  },
  {
    name: "Daniel Martinez",
    role: "Product Manager",
    image: "assets/images/person2.webp",
    rating: 5,
    feedback: "Fantastic service, competitive prices, and a wide range of cars to choose from."
  },
  {
    name: "Olivia Brown",
    role: "HR Specialist",
    image: "assets/images/girl3.webp",
    rating: 4,
    feedback: "The booking system was intuitive, and the staff explained everything clearly."
  },
  {
    name: "William Taylor",
    role: "Entrepreneur",
    image: "assets/images/person3.webp",
    rating: 5,
    feedback: "Loved driving the premium car I booked. It was spotless and ran perfectly."
  },
  {
    name: "Ava Wilson",
    role: "Content Creator",
    image: "assets/images/girl4.webp",
    rating: 5,
    feedback: "I appreciate the flexibility Nova Ride offers. It made my travel stress-free."
  },
  {
    name: "Ethan Thomas",
    role: "Financial Advisor",
    image: "assets/images/person4.webp",
    rating: 4,
    feedback: "Professional and reliable service. The whole process felt smooth and transparent."
  }
];

  cardWidth = 100/2;

  // Show 4 cards at a time
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  next() {
    if (this.currentIndex < this.reviews.length ) {
      this.currentIndex++;
    }
  }

  getTransform() {
    return `translateX(-${this.currentIndex * this.cardWidth}%)`;
  }

   
}

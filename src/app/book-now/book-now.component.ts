import { Component } from '@angular/core';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent {
  username: string="";
  carId: string = "";
  time: number =0  ;
  duration: string = "";
  vehicleType: string = "";
  paymentMethod: string = "";

  onSubmit() {
    // Handle form submission logic here
    // if (!this.username || !this.carId || !this.time || !this.duration || !this.vehicleType || !this.paymentMethod) {
    //   alert('Please fill in all the fields');
    //   return;
    // }
    const formData = { username: this.username, carId: this.carId, time: this.time, duration: this.duration, vehicleType: this.vehicleType , paymentMethod : this.paymentMethod };
    console.log('Form data:', formData);
  
    this.username = '';
    this.carId = '';
    this.time = 0;
    this.duration = '';
    this.vehicleType = '';
    this.paymentMethod = '';
  }
  
}

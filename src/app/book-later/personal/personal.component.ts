import { Component } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  username: string="";
  carId: string = "";
  date: number=0;
  time: number =0  ;
  duration: string = "";
  vehicleType: string = "";
  paymentMethod: string = "";

  onSubmit() {
    // // Handle form submission logic here
    // if (!this.username || !this.carId || !this.date  || !this.time || !this.duration || !this.vehicleType || !this.paymentMethod) {
    //   alert('Please fill in all the fields');
    //   return;
    // }
    const formData = { username: this.username, carId: this.carId, date: this.date ,time: this.time, duration: this.duration, vehicleType: this.vehicleType , paymentMethod : this.paymentMethod };
    console.log('Form data:', formData);
    
    this.username = '';
    this.carId = '';
    this.time = 0;
    this.duration = '';
    this.vehicleType = '';
    this.paymentMethod = '';
  }
}

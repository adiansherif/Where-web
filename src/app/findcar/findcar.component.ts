import { Component } from '@angular/core';

@Component({
  selector: 'app-findcar',
  templateUrl: './findcar.component.html',
  styleUrls: ['./findcar.component.css']
})
export class FindcarComponent {
  carId: number = 0 ;
  onSubmit(){
    const data = {carId: this.carId};
    console.log('id of car:', data);
  }
}

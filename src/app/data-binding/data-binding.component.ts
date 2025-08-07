import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  courseName: string ="Angular";
  isIndian:boolean=false;
  myClassName: string ="bg-primary";
  inputType= "checkbox";
  state: string="goa";
  rollNo: number = 12;

  currentDate: Date = new Date();  

  firstName= signal("Krutika Salotagi");
  
  constructor()
  {
    
  }
  changecourseName()
  {
    this.courseName ="React js";
    this.firstName.set("Krutika Alure");
  }
  showAlert()
  {
    alert("Hello there welcome to Web World!!!!!!!");
  }
}

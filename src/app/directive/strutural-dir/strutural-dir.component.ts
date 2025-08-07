import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-strutural-dir',
  standalone: true,
  imports: [CommonModule,FormsModule], //Structural directives like *ngIf and *ngFor are part of the CommonModule in Angular.
//If you're working inside a feature module, you must import CommonModule to use them.
  templateUrl: './strutural-dir.component.html',
  styleUrl: './strutural-dir.component.css'
})
export class StruturalDirComponent {
  //variables
  isDiv1Visiable:boolean=true;
  isdiv2Visible:boolean=true;
  num1:string="";
  num2:string="";
  isActive:boolean=true;
selectedState:string='';

cityArray: string[] =['Pune','solapur','Aland','Bangalore'];

studentList: any[]=[
  {id:1,name:'Krutika',city:'Solapur',phone:9323237783,isActive: false},
  {id:2,name:'Kiran',city:'gulabarga',phone:9323232383,isActive: true},
  {id:3,name:'Datta',city:'bangalore',phone:9323237283,isActive: false},
  {id:4,name:'Laxmi',city:'mumbai',phone:9323237782,isActive: true},
  {id:5,name:'Jimmy',city:'channai',phone:9323237799,isActive: false},
];

  showDiv1()
  {
    this.isDiv1Visiable=true;
  }

   hideDiv1()
  {
    this.isDiv1Visiable=false;
  }
  toggleDiv2(){
    this.isdiv2Visible =!this.isdiv2Visible;
    // if(this.isdiv2Visible == true)
    // {
    //   this.isdiv2Visible=false;
    // }
    // else{
    //   this.isdiv2Visible=true;
    // }
  }

}

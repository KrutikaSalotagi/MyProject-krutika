import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from './Model/Employee';
import { state } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyProject';
  employeeFrom: FormGroup = new FormGroup({}); 

  employeeObj: EmployeeModel = new EmployeeModel();

  employeeList:EmployeeModel[] =[];

  constructor()
  {

    this.createFrom();
    debugger;
    const oldData=localStorage.getItem("EmpData");
    if(oldData != null)
    {
      const parseData = JSON.parse(oldData);
      this.employeeList= parseData;
    }
    
  }

  createFrom(){
    this.employeeFrom = new FormGroup(
      {
        empid: new FormControl(this.employeeObj.empid,),
        name: new FormControl(this.employeeObj.name),
        city: new FormControl(this.employeeObj.city),
        state: new FormControl(this.employeeObj.state),
        emailId: new FormControl(this.employeeObj.emailId,[Validators.required]),
        address: new FormControl(this.employeeObj.address),
        contactNo: new FormControl(this.employeeObj.contactNo),
        pinCode: new FormControl(this.employeeObj.pinCode,[Validators.required, Validators.minLength(6)])
      })
  }
  Reset()
  {
    this.employeeObj =new EmployeeModel();
    this.createFrom();
  }
  onSave()
  {
     debugger;
     const oldData = localStorage.getItem("EmpData");
     if(oldData !=null)
     {
      const parseData = JSON.parse(oldData);
      this.employeeFrom.controls['empid'].setValue(parseData.length +1);
      this.employeeList.unshift(this.employeeFrom.value);
      // this.employeeList = parseData;
     }
     
     else
      {
      this.employeeList.unshift(this.employeeFrom.value);
      }
      localStorage.setItem("EmpData",JSON.stringify(this.employeeList));
      this.Reset();

  }

  onEdit(item:EmployeeModel)
  {
    this.employeeObj =item;
    this.createFrom()
    
  }

  onUpdate()
  {
    const record =this.employeeList.find(m=>m.empid == this.employeeFrom.controls['empid'].value);
    if(record != undefined)
    {
      record.address = this.employeeFrom.controls['address'].value;
      record.name = this.employeeFrom.controls['name'].value;
      record.city = this.employeeFrom.controls['city'].value;
      record.pinCode = this.employeeFrom.controls['pinCode'].value;
      record.emailId = this.employeeFrom.controls['emailId'].value;
      record.empid = this.employeeFrom.controls['empid'].value;
      record.state = this.employeeFrom.controls['state'].value;
      record.contactNo = this.employeeFrom.controls['contactNo'].value;
    }
      localStorage.setItem("EmpData",JSON.stringify(this.employeeList));
      this.employeeObj = new EmployeeModel();
      this.createFrom();
      this.Reset();
  }
  onDelete(id : number)
  {
    const isDelete = confirm("Do you want to delete it?");
    if(isDelete)
    {
      const index = this.employeeList.findIndex(m=>m.empid == id);
      this.employeeList.splice(index,1);
      localStorage.setItem("EmpData",JSON.stringify(this.employeeList));

    }
  }
}

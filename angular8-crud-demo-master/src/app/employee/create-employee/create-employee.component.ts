
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/model/employee.model';

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  createEmployee:FormGroup
  constructor(private employeeService: EmployeeService,private fb:FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.createEmployee=this.fb.group({
      username:['',Validators.required ],
      surname:[,Validators.required],
      emailid:['',[Validators.required,,Validators.email]],
      password: ['',Validators.required ],
      dob: ['',Validators.required ],
      joiningDate:['',Validators.required ],
      pincode:['',Validators.required ]
    })
  }


  onSubmit() {
    this.submitted = true;
    this.employeeService.createEmployee(this.employee)
    .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.router.navigate(['/employees']);
  }

  get f() { return this.createEmployee.controls; }
}

 

  


  
    
  
  



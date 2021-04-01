// import { Employee } from '../../model/employee.model';
// import { Component, OnInit, Input } from '@angular/core';
// import { EmployeeService } from '../../service/employee.service';
// import { EmployeeListComponent } from '../employee-list/employee-list.component';
// import { Router, ActivatedRoute } from '@angular/router';

// @Component({
//   selector: 'app-employee-details',
//   templateUrl: './employee-details.component.html',
//   styleUrls: ['./employee-details.component.css']
// })
// export class EmployeeDetailsComponent implements OnInit {

//   id: number;
//   employee: Employee;

//   constructor(private route: ActivatedRoute,private router: Router,
//     private employeeService: EmployeeService) { }

//   ngOnInit() {
//     this.employee = new Employee();

//     this.id = this.route.snapshot.params['id'];
    
//     this.employeeService.getEmployeeById(this.id)
//       .subscribe(data => {
//         console.log('userdetails',data)
//         this.employee = data.data[0];
//       }, error => console.log(error));
//   }

//   list(){
//     this.router.navigate(['employees']);
//   }
// }

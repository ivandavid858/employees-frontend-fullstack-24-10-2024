import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  employee : Employee = new Employee();

  constructor(
    private employeeService:EmployeeService,
    private router:Router
  ) { }
  
  ngOnInit(): void {

  }

  saveEmployee() {
    this.employeeService.registerEmployee(this.employee).subscribe(data => {
      this.goToEmployeeListRoute();
    }, error => console.log(error));
  }

  private goToEmployeeListRoute() {
    this.router.navigate(['/employees']);
  }

  onSubmit() {
    this.saveEmployee();
  }

}

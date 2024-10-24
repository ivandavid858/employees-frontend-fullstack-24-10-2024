import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees: Employee[];

  constructor(
    private employeeService:EmployeeService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  updateEmployee(id:number) {
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id:number) {
    swal({
      title: "¿Are you sure?",
      text: "Confirm if you want to delete the employee",
      type: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      confirmButtonClass: "btn btn-success",
      cancelButtonClass: "btn btn-danger",
      buttonsStyling: true
    }).then((result) => {
      if (result.value) {
        this.employeeService.deleteEmployee(id).subscribe(data => {
          this.getEmployees();
          swal(
            "Employee deleted",
            "Employee deleted successfully",
            "success"
          );
        });
      }
    });
    
  }

  showDetailsEmployee(id:number) {
    this.router.navigate(['employee-details', id]);
  }

  private getEmployees() {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  

}

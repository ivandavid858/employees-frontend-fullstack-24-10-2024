import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id:number;
  employee:Employee;

  constructor(
    private route:ActivatedRoute,
    private employeeService:EmployeeService
  ) {
  }

  ngOnInit() {
    this.showEmployeeParametters();
  }

  private showEmployeeParametters() {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
      swal(
        `Details of employee ${this.employee.name}`
      );
    })
  }


}

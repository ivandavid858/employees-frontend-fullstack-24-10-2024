import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  id:number;
  employee:Employee = new Employee();

  constructor(
    private employeeService:EmployeeService,
    private router:Router,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.showEmployeeParams();
  }

  onSubmit() {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
      this.goToEmployeeListComponent();
    }, error => console.log(error));
  }

  showEmployeeParams() {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.log(error));
  }

  private goToEmployeeListComponent() {
    this.router.navigate(['/employees']);
    swal("Employee updated",
      `The employee ${this.employee.name} has been updated successfully`,
      `success`
    );
  }

}

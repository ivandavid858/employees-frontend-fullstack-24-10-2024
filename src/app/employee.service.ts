import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root' //providedIn -> this is so that employee.service service can be used by components
})
export class EmployeeService {

  //Url to obtain the employees list from backend
  //private backendUrl = "http://localhost:8080";

  private baseURL = environment.backendUrl + '/employees';
  //private baseURL = this.backendUrl + '/employees';

  constructor(private httpClient:HttpClient) { 

  }

  //Method to get employees
  getEmployeeList():Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  //Method to register an employee
  registerEmployee(employee:Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  updateEmployee(id:number, employee:Employee): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  getEmployeeById(id:number): Observable<Employee> {

    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  deleteEmployee(id:number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

}

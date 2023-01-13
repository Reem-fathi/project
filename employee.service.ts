import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  addEmpURL:string;
  getEmpURL:string;
  updateEmpUrl:string;
  deleteEmpUrl:string;

  constructor(private http:HttpClient) { 

    this.addEmpURL='http://localhost:8081/emp/add-employee';
    this.getEmpURL='http://localhost:8081/emp/get-employees';
    this.updateEmpUrl='http://localhost:8081/emp/update-employee/{id}';
    this.deleteEmpUrl='http://localhost:8081/emp/delete-employee/{id}';
  }
  addEmployee(emp: Employee):Observable<Employee>{
    return this.http.post<Employee>(this.addEmpURL,emp,{headers:{"Authorization":`Bearer ${localStorage.getItem("jwt")}`}})

  }
  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.getEmpURL);

  }
  updateEmployee(emp:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.updateEmpUrl,emp);
  }
 
  deleteEmployee(emp: Employee){
    return this.http.delete<Employee>(this.deleteEmpUrl+'/'+emp.empId);
  }
}

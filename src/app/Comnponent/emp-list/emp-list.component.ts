import { Component, OnInit, inject } from '@angular/core';
import { HttpService } from 'src/app/Services/http.service';
import { EmployeeFacade } from 'src/app/store/emp.facade';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css'],
})
export class EmpListComponent implements OnInit {
  employeeFacade = inject(EmployeeFacade);
  employee!: any;
  constructor() {}
  ngOnInit(): void {
    this.employeeFacade.getAllEmployeeData();
  }
}

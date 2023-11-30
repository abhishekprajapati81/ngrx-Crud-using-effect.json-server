import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Empolyee } from 'src/app/Interface/employee';
import { EmployeeFacade } from 'src/app/store/emp.facade';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css'],
})
export class EmpAddComponent implements OnInit {
  constructor(private employeeFacade: EmployeeFacade) {}
  myForm!: FormGroup;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
    });
  }
  onAdd(val: any) {
    console.log(val);

    this.employeeFacade.getNewEmployeeData(val);
  }
}

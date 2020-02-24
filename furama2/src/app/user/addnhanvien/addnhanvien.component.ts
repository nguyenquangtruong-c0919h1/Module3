import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-addnhanvien',
  templateUrl: './addnhanvien.component.html',
  styleUrls: ['./addnhanvien.component.css']
})
export class AddnhanvienComponent implements OnInit {
  public formAddNewEmployee: FormGroup
  public maxDate = new Date()
  public minDate = new Date(1900,1,1)
  constructor(
    public formBuilder: FormBuilder,
    public employeeService: EmployeesService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.formAddNewEmployee = this.formBuilder.group({
      name: ['',[Validators.required]],
      idRole: ['',[Validators.required]],
      idSkill: ['',[Validators.required]],
      idDepart: ['',[Validators.required]],
      dateOfBirth: ['',[Validators.required]],
      idCard: ['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
      salary: ['',[Validators.required,Validators.pattern('[0-9]*')]],
      phoneNumber: ['',[Validators.required,Validators.pattern('^0[0-9\s.-]{9,11}$')]],
      email: ['',[Validators.required,Validators.email]],
      address: ['',[Validators.required]]
    })
  }


  addNewEmployee() {
    this.employeeService.addNewEmployee(this.formAddNewEmployee.value).subscribe(data => {
      this.router.navigateByUrl("nhanvien-list");
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from '../../../services/employees.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nhanvien-edit',
  templateUrl: './nhanvien-edit.component.html',
  styleUrls: ['./nhanvien-edit.component.css']
})
export class NhanvienEditComponent implements OnInit {
  public employeeById;
  public formEditNewEmployee: FormGroup
  public maxDate = new Date()
  public minDate = new Date(1900,1,1)
  constructor(
    public formBuilder: FormBuilder,
    public employeeService: EmployeesService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formEditNewEmployee = this.formBuilder.group({
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

    this.activatedRoute.params.subscribe(data=>{
      this.employeeById = data.id
      this.employeeService.getEmployeeById(this.employeeById).subscribe(data=>{
        this.formEditNewEmployee.patchValue(data)
      })
    })
  }

  editEmployee(){
    this.employeeService.updateEmployee(this.employeeById,this.formEditNewEmployee.value).subscribe(data=>{
      this.router.navigateByUrl("nhanvien-list")
    })
  }

}

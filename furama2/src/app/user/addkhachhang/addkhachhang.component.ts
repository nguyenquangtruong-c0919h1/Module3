import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {CustomerService} from '../../services/customer.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-addkhachhang',
  templateUrl: './addkhachhang.component.html',
  styleUrls: ['./addkhachhang.component.css']
})
export class AddkhachhangComponent implements OnInit {
public formAddNewCustomer : FormGroup
public maxDate = new Date()
public minDate = new Date(1920,1,1)
  constructor(
    public formBuider : FormBuilder,
    public customerService : CustomerService,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.formAddNewCustomer = this.formBuider.group({
      type:['',[Validators.required]],
      name:['',[Validators.required]],
      dateOfBirth:['',[Validators.required]],
      idCard:['',[Validators.required,Validators.pattern('^[0-9]{9}$')]],
      phoneNumber:['',[Validators.required,Validators.pattern('^0[0-9\s.-]{9,11}$')]],
      email:['',[Validators.required,Validators.email]],
      address:['',[Validators.required]]
    })
  }
  addNewCustomer(){
    this.customerService.addNewCustomer(this.formAddNewCustomer.value).subscribe(data=>{
      this.router.navigateByUrl("khachhang-list");
    })

  }
}

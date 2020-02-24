import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-khachhang-edit',
  templateUrl: './khachhang-edit.component.html',
  styleUrls: ['./khachhang-edit.component.css']
})
export class KhachhangEditComponent implements OnInit {
  public customerById;
  public formEditNewCustomer: FormGroup
  public maxDate = new Date()
  public minDate = new Date(1920, 1, 1)
  constructor(
    public formBuider: FormBuilder,
    public customerService: CustomerService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formEditNewCustomer = this.formBuider.group({
      type: ['', [Validators.required]],
      name: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      idCard: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^0[0-9\s.-]{9,11}$')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required]]
    })

    this.activatedRoute.params.subscribe(data=>{
      this.customerById=data.id
      console.log(this.customerById)
      this.customerService.getCustomerById(this.customerById).subscribe(data=>{
        this.formEditNewCustomer.patchValue(data);
        console.log(data)
      })
    })
  }
editCustomer(){
  this.customerService.updateCustomer(this.customerById,this.formEditNewCustomer.value).subscribe(data=>{
    this.router.navigateByUrl("khachhang-list")
  })
}
}

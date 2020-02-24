import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { from } from 'rxjs';
import { ServiceService } from '../../services/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-adddichvu',
  templateUrl: './adddichvu.component.html',
  styleUrls: ['./adddichvu.component.css']
})
export class AdddichvuComponent implements OnInit {
public formAddNewService : FormGroup
  constructor(
    public formBuilder : FormBuilder,
    private serviceService : ServiceService,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.formAddNewService=this.formBuilder.group({
      nameService:['',[Validators.required]],
      area:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      numberFloor:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      maxPeople:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      rentalCosts:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      status:['',[Validators.required]]
    })

  }

  addNewService(){
    this.serviceService.addNewService(this.formAddNewService.value).subscribe(data=>{
      this.router.navigateByUrl("dichvu-list");
    })
  }

}

import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import { from } from 'rxjs';
import { ServiceService } from '../../../services/service.service';
@Component({
  selector: 'app-dichvu-edit',
  templateUrl: './dichvu-edit.component.html',
  styleUrls: ['./dichvu-edit.component.css']
})
export class DichvuEditComponent implements OnInit {
  public formEditNewService : FormGroup;
  public dichvuId
  constructor(
    public formBuilder : FormBuilder,
    private serviceService : ServiceService,
    public router : Router,
    public activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formEditNewService=this.formBuilder.group({
      nameService:['',[Validators.required]],
      area:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      numberFloor:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      maxPeople:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      rentalCosts:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      status:['',[Validators.required]]
    })
    this.activatedRoute.params.subscribe(data=>{
      this.dichvuId= data.id;
      this.serviceService.getServiceById(this.dichvuId).subscribe(data=>{
        this.formEditNewService.patchValue(data)
      })
    })
  }
editService(){
  this.serviceService.updateService(this.dichvuId,this.formEditNewService.value).subscribe(data=>{
    this.router.navigateByUrl("dichvu-list")
  })
}

}

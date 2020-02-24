import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {HopdongService} from '../../services/hopdong.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addhopdong',
  templateUrl: './addhopdong.component.html',
  styleUrls: ['./addhopdong.component.css']
})
export class AddhopdongComponent implements OnInit {
public formAddNewHopDong : FormGroup
  constructor(
    public formBuider :FormBuilder,
    public hopdongService : HopdongService,
    public router : Router
  ) { }

  ngOnInit(): void {
    this.formAddNewHopDong = this.formBuider.group({
      startHopDong:['',[Validators.required]],
      endHopDong:['',[Validators.required]],
      electronicMoney:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
      totalMoney:['',[Validators.required,Validators.pattern('^[0-9]*$')]]
    })
  }

  addNewHopDong(){
    this.hopdongService.addNewHopDong(this.formAddNewHopDong.value).subscribe(data=>{
      this.router.navigateByUrl("hopdong-list")
    })
  }
}

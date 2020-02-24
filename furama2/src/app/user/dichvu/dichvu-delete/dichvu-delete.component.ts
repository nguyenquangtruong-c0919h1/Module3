import { Component, OnInit , Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {ServiceService} from '../../../services/service.service';
@Component({
  selector: 'app-dichvu-delete',
  templateUrl: './dichvu-delete.component.html',
  styleUrls: ['./dichvu-delete.component.css']
})
export class DichvuDeleteComponent implements OnInit {
public serviceName;
public serviceId;
  constructor(
    public dialogRef: MatDialogRef<DichvuDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public serviceService : ServiceService
  ) { }

  ngOnInit(): void {
    this.serviceName = this.data.name.nameService;
    this.serviceId = this.data.name.id;
  }
  deleteService(){
    this.serviceService.deleteService(this.serviceId).subscribe(data=>{
      this.dialogRef.close();
      
    })
  }

}

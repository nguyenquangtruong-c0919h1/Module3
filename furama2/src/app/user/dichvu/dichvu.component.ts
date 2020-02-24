import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service'
import { MatDialog } from '@angular/material/dialog';
import {DichvuDeleteComponent} from './dichvu-delete/dichvu-delete.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.css']
})
export class DichvuComponent implements OnInit {
  p: number = 1;
  public serviceId;
public term : string ;
  public services;
  constructor(
    public serviceService: ServiceService,
    public dialog: MatDialog
  ) { }
  ngOnInit(): void {
    this.serviceService.getAllService().subscribe(data=>{
      this.services = data;
      console.log(this.services);
    })
  }

  openDialog(serviceId): void {
    this.serviceService.getServiceById(serviceId).subscribe(dataOfName => {
      const dialogRef = this.dialog.open(DichvuDeleteComponent, {
        width: '600px',
        data: { name: dataOfName }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });

    })


  }
  
}

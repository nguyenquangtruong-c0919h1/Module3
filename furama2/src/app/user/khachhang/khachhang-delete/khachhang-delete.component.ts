import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from '../../../services/customer.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-khachhang-delete',
  templateUrl: './khachhang-delete.component.html',
  styleUrls: ['./khachhang-delete.component.css']
})
export class KhachhangDeleteComponent implements OnInit {
  public customerName;
  public customerId;
  constructor(
    public dialogRef: MatDialogRef<KhachhangDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public customerService : CustomerService) { }

  ngOnInit(): void {
    
    this.customerName = this.data.name.name;
    this.customerId = this.data.name.id;
  }
  deleteCustomer(){
    this.customerService.deteleCustomer(this.customerId).subscribe(data=>{
      this.dialogRef.close();
      
    })
  }

}

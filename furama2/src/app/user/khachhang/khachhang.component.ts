import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { MatDialog } from '@angular/material/dialog';
import {KhachhangDeleteComponent} from './khachhang-delete/khachhang-delete.component'

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit {
  public customers;
  public term: string = '';
  public name;
  p: number = 1;
  constructor(
    public customerService: CustomerService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.customerService.getAllCustomers().subscribe(data => {
      this.customers = data;
    })
  }
  openDialog(customerId): void {
    this.customerService.getCustomerById(customerId).subscribe(dataOfName => {
      const dialogRef = this.dialog.open(KhachhangDeleteComponent, {
        width: '600px',
        data: { name: dataOfName }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });

    })


  }}

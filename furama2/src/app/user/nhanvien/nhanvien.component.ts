import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { NhanvienDeleteComponent } from '../nhanvien/nhanvien-delete/nhanvien-delete.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.css']
})
export class NhanvienComponent implements OnInit {
  public employees;
  public term: any;
  public animal: string;
  public name: string;
  p: number = 1;

  constructor(
    public employeeService: EmployeesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    })
  }
  openDialog(employeeId): void {
    this.employeeService.getEmployeeById(employeeId).subscribe(dataOfEmployee => {
      const dialogRef = this.dialog.open(NhanvienDeleteComponent, {
        width: '600px',
        data: { name: dataOfEmployee }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    })


  }


}

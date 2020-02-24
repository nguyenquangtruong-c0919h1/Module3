import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-nhanvien-delete',
  templateUrl: './nhanvien-delete.component.html',
  styleUrls: ['./nhanvien-delete.component.css']
})
export class NhanvienDeleteComponent implements OnInit {
  public employeeFullName;
  public employeeId;
  constructor(
    public dialogRef: MatDialogRef<NhanvienDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public employeeService: EmployeesService
    ) { }

  ngOnInit(): void {
    this.employeeFullName = this.data.name.name;
    this.employeeId = this.data.name.id;
  }
  deleteEmployee() {
    this.employeeService.deleteEmployee(this.employeeId).subscribe(data => {
      this.dialogRef.close();
    })
  }


}

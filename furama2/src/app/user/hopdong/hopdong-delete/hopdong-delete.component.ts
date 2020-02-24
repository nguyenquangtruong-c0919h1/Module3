import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { from } from 'rxjs';
import { HopdongService } from 'src/app/services/hopdong.service';
@Component({
  selector: 'app-hopdong-delete',
  templateUrl: './hopdong-delete.component.html',
  styleUrls: ['./hopdong-delete.component.css']
})
export class HopdongDeleteComponent implements OnInit {
  public hopDongId;
  constructor(
    public dialogRef: MatDialogRef<HopdongDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public hopDongService : HopdongService) { }
  ngOnInit(): void {
    this.hopDongId = this.data.name.id;
  }
  deleteHopDong(){
    this.hopDongService.deleteHopDong(this.hopDongId).subscribe(data=>{
      this.dialogRef.close();
    })
  }

}

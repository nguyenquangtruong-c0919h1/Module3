import { Component, OnInit } from '@angular/core';
import {HopdongService} from '../../services/hopdong.service';
import {MatDialog} from '@angular/material/dialog';
import {HopdongDeleteComponent} from './hopdong-delete/hopdong-delete.component';
@Component({
  selector: 'app-hopdong',
  templateUrl: './hopdong.component.html',
  styleUrls: ['./hopdong.component.css']
})
export class HopdongComponent implements OnInit {
p:number=1;
public term: string;
public hopdongs;
public name;
  constructor(
    public hopdongService : HopdongService,
    public dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.hopdongService.getAllHopDong().subscribe(data=>{
      this.hopdongs=data;
      console.log(this.hopdongs);
    })
  }
  openDialog(hopdongId): void {
    this.hopdongService.getHopDongById(hopdongId).subscribe(dataOfHopDong=>{
      const dialogRef = this.dialog.open(HopdongDeleteComponent, {
        width: '600px',
        data: {name: dataOfHopDong}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    })
    
  }

}

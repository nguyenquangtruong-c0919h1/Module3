import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { NhanvienComponent } from './user/nhanvien/nhanvien.component';
import { KhachhangComponent } from './user/khachhang/khachhang.component';
import { DichvuComponent } from './user/dichvu/dichvu.component';
import { HopdongComponent } from './user/hopdong/hopdong.component';
import { AddkhachhangComponent } from './user/addkhachhang/addkhachhang.component';
import { AddnhanvienComponent } from './user/addnhanvien/addnhanvien.component';
import { AdddichvuComponent } from './user/adddichvu/adddichvu.component';
import { AddhopdongComponent } from './user/addhopdong/addhopdong.component';
import { HomepageComponent } from './main/body/home/homepage/homepage.component';
import { HopdongEditComponent } from './user/hopdong/hopdong-edit/hopdong-edit.component';
import { KhachhangEditComponent } from './user/khachhang/khachhang-edit/khachhang-edit.component';
import { NhanvienEditComponent } from './user/nhanvien/nhanvien-edit/nhanvien-edit.component';
import { DichvuEditComponent } from './user/dichvu/dichvu-edit/dichvu-edit.component'
import { from } from 'rxjs';
const routes: Routes = [
  { path: 'nhanvien-list', component: NhanvienComponent },
  { path: 'khachhang-list', component: KhachhangComponent },
  { path: 'dichvu-list', component: DichvuComponent },
  { path: 'khachhang-add', component: AddkhachhangComponent },
  { path: 'nhanvien-add', component: AddnhanvienComponent },
  { path: 'dichvu-add', component: AdddichvuComponent },
  { path: 'hopdong-list', component: HopdongComponent },
  { path: 'hopdong-add', component: AddhopdongComponent },
  { path: 'hopdong-edit/:id', component: HopdongEditComponent },
  { path: 'khachhang-edit/:id', component: KhachhangEditComponent },
  { path: 'nhanvien-edit/:id', component: NhanvienEditComponent },
  { path: 'dichvu-edit/:id', component: DichvuEditComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { SlidebarComponent } from './main/body/slidebar/slidebar.component';
import { BodyComponent } from './main/body/body.component';
import { HomeComponent } from './main/body/home/home.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


import { NhanvienComponent } from './user/nhanvien/nhanvien.component';
import { KhachhangComponent } from './user/khachhang/khachhang.component';
import { AddkhachhangComponent } from './user/addkhachhang/addkhachhang.component';
import { AddnhanvienComponent } from './user/addnhanvien/addnhanvien.component';
import { DichvuComponent } from './user/dichvu/dichvu.component';
import { AdddichvuComponent } from './user/adddichvu/adddichvu.component';
import { HopdongComponent } from './user/hopdong/hopdong.component';
import { AddhopdongComponent } from './user/addhopdong/addhopdong.component';
import { HomepageComponent } from './main/body/home/homepage/homepage.component';
import { NhanvienDeleteComponent } from './user/nhanvien/nhanvien-delete/nhanvien-delete.component';
import { KhachhangDeleteComponent } from './user/khachhang/khachhang-delete/khachhang-delete.component';
import { HopdongDeleteComponent } from './user/hopdong/hopdong-delete/hopdong-delete.component';
import { DichvuDeleteComponent } from './user/dichvu/dichvu-delete/dichvu-delete.component';
import { HopdongEditComponent } from './user/hopdong/hopdong-edit/hopdong-edit.component';
import { KhachhangEditComponent } from './user/khachhang/khachhang-edit/khachhang-edit.component';
import { NhanvienEditComponent } from './user/nhanvien/nhanvien-edit/nhanvien-edit.component';
import { DichvuEditComponent } from './user/dichvu/dichvu-edit/dichvu-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SlidebarComponent,

    BodyComponent,
    HomeComponent,
    UserComponent,
    NhanvienComponent,
    KhachhangComponent,
    AddkhachhangComponent,
    AddnhanvienComponent,
    DichvuComponent,
    AdddichvuComponent,
    HopdongComponent,
    AddhopdongComponent,
    HomepageComponent,
    NhanvienDeleteComponent,
    KhachhangDeleteComponent,
    HopdongDeleteComponent,
    DichvuDeleteComponent,
    HopdongEditComponent,
    KhachhangEditComponent,
    NhanvienEditComponent,
    DichvuEditComponent
    
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

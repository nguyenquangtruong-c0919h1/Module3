import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HopdongService {
public API: string = 'http://localhost:3000/hopdong';
  constructor(
    public http:HttpClient
  ) { }
  getAllHopDong():Observable<any>{
    return this.http.get(this.API);
  }
  addNewHopDong(hopdong):Observable<any>{
    return this.http.post(this.API,hopdong)
  }
  getHopDongById(hongdongId):Observable<any>{
    return this.http.get(this.API + '/' + hongdongId);
  }
 deleteHopDong(hopdongId):Observable<any>{
   return this.http.delete(this.API + '/' + hopdongId);
 }
 updateHopdong(hopdong, hopdongId):Observable<any>{
   return this.http.put(this.API +'/' + hopdongId,hopdong)
 }
}

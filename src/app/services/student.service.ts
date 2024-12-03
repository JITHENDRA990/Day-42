import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseurl="https://sheetdb.io/api/v1/l5sc202162trk";

  constructor(private http:HttpClient) { }
  getall():Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}`);
  }
  getbyemail(email:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseurl}/search?email=${email}`);
  }
  addstudent(records:Student):Observable<any>{
    return this.http.post(`${this.baseurl}`,{data:records});
  }
  updatestudent(id:number,records:Student):Observable<any>{
    return this.http.put<any>(`${this.baseurl}/id/${id}`,{data:records})
  }
  deletestudent(id:string):Observable<any>{
    return this.http.delete(`${this.baseurl}/id/${id}`);
  }
  // deletebyname(name:string):Observable<any>{
  //   return this.http.delete(`${this.baseurl}/name/${name}`);
  // }
  // fetchbyid(id:string):Observable<any[]>{
  //   return this.http.get<any[]>(`${this.baseurl}/search?id=${id}`);
  // }
}

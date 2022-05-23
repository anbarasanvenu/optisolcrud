import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserbioService {

  baseUrl = "http://54.202.218.249:9501/api/users";
  updateUrl = "http://54.202.218.249:9501/api/users/5f089d77daf7e9001435082f";
  deleteUrl = "";

  constructor(private http: HttpClient ) { }

  postData(data: any){
    return this.http.post<any>(this.baseUrl, data).pipe(map(res => {
      return res;
    }));
  }

  getData(){
    return this.http.get<any>(this.baseUrl).pipe(map(res => {
      return res;
    }));
  }

  getSData(id: any){
    return this.http.get<any>('http://54.202.218.249:9501/api/users/' + id).pipe(map(res => {
      return res;
    }));
  }

  deleteUserBio(id: any){
    return this.http.delete<any>("http://54.202.218.249:9501/api/users/" + id).pipe(map(res => {
      return res;
    }));
  }

  getupateData(data:any, id: any){
    return this.http.put<any>('http://54.202.218.249:9501/api/users/' + id, data).pipe(map(res => {
      return res;
    }));
  }

}

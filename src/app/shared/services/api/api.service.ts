
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getRequestByQuery(arg0: string, value: string) {
    throw new Error('Method not implemented.');
  }

  private rootUrl = environment.base_url
  constructor(private http: HttpClient,private sharedService: SharedService) {
  }

  postRequest(url: string, body: {}): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', this.sharedService.getToken());
    return this.http.post(`${this.rootUrl}${url}`, body);
  }

  postLoginRequest(url: string, body: {}): Observable<any> {
    return this.http.post(`${this.rootUrl}${url}`, body);
  }

  loginAuthenticate(url: string,email:string,password:string): Observable<any> {
    let params =new HttpParams().set("email",email).set("password",password);
    let value = this.http.get(`${this.rootUrl}${url}`,{params});
    return value;
  }
  getRequest(url: string): Observable<any> {
    let value = this.http.get(`${this.rootUrl}${url}`);
    return value;
   }
   getRequestbyParam(url:string,type:string): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', this.sharedService.getToken())
    let params =new HttpParams().set("type",type).set("poNo",type).set("supplierSlNo",type);
    let value = this.http.get(`${this.rootUrl}${url}`,{ headers, params });
    return value;
   }
   
   getRequestbyParamSlNo(url:string,sl_no:string): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', this.sharedService.getToken())
    let params =new HttpParams().set("sl_no",sl_no);
    let value = this.http.get(`${this.rootUrl}${url}`,{ headers, params });
    return value;
   }
  
   getRequestbyDate(url:string,fromDate:string,toDate:string): Observable<any> {
    let params =new HttpParams().set("fromDate",fromDate).set("toDate",toDate);
    let value = this.http.get(`${this.rootUrl}${url}`,{params});
    return value;
   }

   getRequestByID(url:string, id:any): Observable<any> {
    let value = this.http.get(`${this.rootUrl}${url}/${id}`);
    return value;
   }
  
  putRequestById(url: string, id: number, body: {}): Observable<any> {
    return this.http.put(`${this.rootUrl}${url}/${id}`, body );
  }
  putRequest(url: string, body: {}): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', this.sharedService.getToken());
    return this.http.put(`${this.rootUrl}${url}`, body , {headers});
  }

  deleteRequest(url: string, body: {}): Observable<any> {
    return this.http.delete(`${this.rootUrl}${url}`,body);
  }
  getRequestbyParams(url:string,type:string,sl_no:string): Observable<any> {
    const headers=new HttpHeaders().set('Authorization', this.sharedService.getToken())
    let params =new HttpParams().set("type",type).set("sl_no",sl_no);
    let value = this.http.get(`${this.rootUrl}${url}`,{ headers, params });
    return value;
   }



}




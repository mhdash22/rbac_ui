import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private token:any; 
  private co_code=null;
  private menu:any;
  constructor() { }

  public setToken(token){
    this.token=token;
    sessionStorage.setItem("token",this.token);
  }

  public getToken(){
    return sessionStorage.getItem("token")
  }

  public setCoCode(co_code){
    this.co_code=co_code
  }
  public getCoCode(){
    return this.co_code
  }

  public setmenu(data){
    if(data.add === true){
      debugger
    this.menu= {
        data :[
                  {title: 'Dashboard', id: 'dashboard/base'},
                  {title: 'Admin-Dashboard', id: 'dashboard/admin'}
               ] 
              }
  }else{
    this.menu= {
     data: [
      {title: 'Dashboard', id: 'dashboard/base'},
   ]
  }
  }
    sessionStorage.setItem("menu",JSON.stringify(this.menu));
  }

  public getmenu(){
    return JSON.parse(sessionStorage.getItem("menu"))
  }

}

import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenusemaineService {
  public lundi = environment.baseUrl + '/menu/findallavailableforweekandday/3/1';
  public mardi = environment.baseUrl + '/menu/findallavailableforweekandday/3/2';
  public mercredi = environment.baseUrl + '/menu/findallavailableforweekandday/3/3';
  public jeudi = environment.baseUrl + '/menu/findallavailableforweekandday/3/4';
  public vendredi = environment.baseUrl + '/menu/findallavailableforweekandday/3/5';
  constructor(private http:HttpClient) { }

  public getMenulundi(): Observable<any> {
    return this.http.get(this.lundi);
  }
  public getMenumardi(): Observable<any> {
    return this.http.get(this.mardi);
  }
  public getMenumercredi(): Observable<any> {
    return this.http.get(this.mercredi);
  }
  public getMenujeudi(): Observable<any> {
    return this.http.get(this.jeudi);
  }
  public getMenuvendredi(): Observable<any> {
    return this.http.get(this.vendredi);
  }
}

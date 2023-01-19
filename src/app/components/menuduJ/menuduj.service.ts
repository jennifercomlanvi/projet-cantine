import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenudujService {
  public Url = environment.baseUrl + '/menu/findallavailablefortoday';
  constructor(private httpclient:HttpClient) { }

  public getMenudj(): Observable<any> {
    return this.httpclient.get(this.Url);
  }
}

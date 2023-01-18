import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public Url = environment.baseUrl + '/user/findall';
  public UrlDetail = environment.baseUrl + '/user/find/';

  constructor(private httpclient:HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpclient.get(this.Url);
  }

  getUserById(userId: number):Observable<any>{
    return this.httpclient.get(this.UrlDetail + `${userId}`);
  }
}

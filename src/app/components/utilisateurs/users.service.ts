import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public Url = environment.baseUrl + '/user/findall';
  constructor(private httpclient:HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpclient.get(this.Url);
  }
}

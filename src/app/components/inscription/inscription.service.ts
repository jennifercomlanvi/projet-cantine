import { user } from './user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  public Url = environment.baseUrl + '/user/register';
  constructor(private httpclient:HttpClient) { }
  public createUser(user:user): Observable<any> {
    return this.httpclient.put(this.Url, user);
  }
}

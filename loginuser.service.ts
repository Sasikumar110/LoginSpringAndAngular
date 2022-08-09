import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private url="http://localhost:8080/login/loginuser"
  constructor(private http:HttpClient) { }

  public loginuser(user:User):Observable<any>
  {
     return this.http.post<any>(`${this.url}`,user);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private url='http://localhost:8080/login/userall';
  constructor(private http:HttpClient) { }

  getdata(): Observable<any>
  {
  return this.http.get(this.url);
  }
  
    
}




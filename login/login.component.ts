import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'SignUp';
  private url="http://localhost:8080/login/create"

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  loginuser(data: any)
  {
    this.http.post(`${this.url}`,data).subscribe((result)=>{
    alert("Registered successfully");
  })
  }

}

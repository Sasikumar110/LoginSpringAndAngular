import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginuserService } from '../loginuser.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user=new User();
  constructor(private loginservice:LoginuserService,public router:Router) { }

  ngOnInit():void{
  }

loginProcess()
{
  this.loginservice.loginuser(this.user).subscribe(
    data=>this.router.navigate(['/homepage']),
    error=>alert("Invalid email and Password")
  )
}
}

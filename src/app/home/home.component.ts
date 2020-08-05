import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string = '';
  constructor(private router:Router){}


  ngOnInit(): void {
  }
  
  formSubmitted(form:NgForm){
    
    if(form.value.name === ''){
      return;
    }
    this.username = form.value.name;
    this.router.navigate(['user'],{queryParams : {id : this.username}});
  }

}

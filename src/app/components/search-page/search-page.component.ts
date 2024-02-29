import { Component,OnInit } from '@angular/core';
import { } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  //standalone: true,
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchform : FormGroup;
  username : string;
  constructor(private route : Router){}
  
  ngOnInit(): void{
    this.searchform=new FormGroup({
      username : new FormControl(
        null,
        [Validators.required]
      )
    })
  }
  sendUser(){
    //console.log(this.searchform.value);
    this.username = this.searchform.value.username;
    this.route.navigate([`user/${this.username}`]);
  }
}

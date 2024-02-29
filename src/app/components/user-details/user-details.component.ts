import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  username : string;
  userDetails: any;

  constructor(private active : ActivatedRoute, 
              private githubService: GithubService, 
              private route : Router){}
  ngOnInit(): void{
    this.active.params.subscribe(params =>{
      this.username = params['id'];
      console.log("params=",this.username);
      
    })
    this.githubService.getUser(this.username).subscribe({
      complete: () => { console.log("successfully done!");},
      error : () => {
        //we navigate to the search page
        alert("you have entered a wrong username!");
        this.route.navigate(['search']);
      },
      next: (data : any = [])=> {
        this.userDetails = data;
        console.log(this.userDetails);
        
      }
      
    })
  }

}

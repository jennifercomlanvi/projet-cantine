import { UsersService } from './../users.service';
import { Users } from './../users';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  users!: Users[];
  user: Users|undefined;
  constructor(private route: ActivatedRoute, private router:Router, private userService:UsersService) { }

  ngOnInit(): void {
    const userId: string|null = this.route.snapshot.paramMap.get('id')
    if(userId){
      this.userService.getUserById(+userId).subscribe(data => {
        console.log(data);
        this.user = data
      });
    }
  }
}
import { Router } from '@angular/router';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users!: Users[];
  user: Users = new Users();
  constructor(private userService:UsersService, private router:Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    })
  }

}

import { Router } from '@angular/router';
import { MenudujService } from './menuduj.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menudjService:MenudujService, route:Router) { }

  ngOnInit(): void {
    this.menudjService.getMenudj().subscribe(data=>{
      console.log(data)
      if(data){console.log(data[0].imageId)}
    })
  }

}

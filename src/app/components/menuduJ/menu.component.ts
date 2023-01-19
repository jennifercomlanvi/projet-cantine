import { ingrediends } from './ingredients';
import { meal } from './meal';
import { Router } from '@angular/router';
import { MenudujService } from './menuduj.service';
import { Component, OnInit } from '@angular/core';
import { MenuDJ } from './menudj';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menudj!:MenuDJ[];
  menu: MenuDJ= new MenuDJ();
  mealdj!:meal[];
  meal: meal= new meal();
  ingredientdj!:ingrediends[];
  ingrediend : ingrediends = new ingrediends();
  constructor(private menudjService:MenudujService, route:Router) { }

  ngOnInit(): void {
    this.menudjService.getMenudj().subscribe(data=>{
      // console.log(data)
      if(data){
        this.menudj = data
        console.log(this.menudj)
        for(let i of this.menudj)
        {
          this.mealdj = i.meals
          for(let j of  this.mealdj)
          {
            this.ingredientdj = j.ingredients
          }
        }
        console.log(this.mealdj)
      }
    })
  }

}

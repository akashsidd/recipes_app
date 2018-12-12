import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  
  private subscription:Subscription;
  ingredients:Ingredients[];
  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients=this.slService.getIngredients();
    this.subscription=this.slService.ingredientChanged.subscribe(
      (ingredients:Ingredients[]) => { this.ingredients=ingredients;}
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  onEditItem(index:number){
    this.slService.startedEditing.next(index);
  }

  //  onIngredientAdded(ingredient:Ingredients)
//  {
//    this.ingredients.push(ingredient);
//  }
}

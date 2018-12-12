import { Ingredients } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService{
    private ingredients:Ingredients[]=[
        new Ingredients('tomatoes',10),
        new Ingredients('onions',20)
      ];
      ingredientChanged=new Subject<Ingredients[]>();
      startedEditing=new Subject<number>();
  getIngredients(){
      return this.ingredients.slice();
  }
   getIngredient(index:number){
       return this.ingredients[index];
   }
  addIngredient(ingredient:Ingredients){
      this.ingredients.push(ingredient);
      this.ingredientChanged.next(this.ingredients.slice());

    }
    updateIngredient(index:number,newIngredient:Ingredients){
        this.ingredients[index]=newIngredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
     addIngredients(ingredients:Ingredients[])
     {
    //    for(let ingredient of ingredients){
    //         this.addIngredient(ingredient);
    //     }  
       
           this.ingredients.push(...ingredients);
           this.ingredientChanged.next(this.ingredients.slice());
         }
}
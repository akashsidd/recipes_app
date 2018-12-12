import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs/Subject';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService{
   // recipeSelected=new EventEmitter<Recipe>();
   recipeChanged=new Subject<any>();
   private recipes : Recipe []= [
        new Recipe('Pasta ', 
        'Sphagetti' , 
        'https://images.media-allrecipes.com/images/56589.png',
       [
           new Ingredients('macaroni',1),
           new Ingredients('cheese',1)]),
        new Recipe('Biriyani', 
        'Chicken Dum Biriyani' , 
        'https://www.africanbites.com/wp-content/uploads/2018/04/IMG_0165.jpg',
        [
            new Ingredients('chicken',1),
            new Ingredients('rice',1)
        ])
      ];
      constructor(private slService : ShoppingListService){}
      setRecipe(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipeChanged.next(this.recipes.slice());
   }
      getRecipes()
      {
          return this.recipes.slice();
      }
      getRecipe(index:number){
          return this.recipes[index];
      }
     
      addRecipe(recipe:Recipe){
         this.recipes.push(recipe);
         this.recipeChanged.next(this.recipes.slice());
      }
      updateRecipe(index:number,newRecipe:Recipe){
          this.recipes[index]=newRecipe;
          this.recipeChanged.next(this.recipes.slice());
      }
      deleteRecipe(index:number){
          this.recipes.splice(index,1);
          this.recipeChanged.next(this.recipes.slice());
      }
      addIngredientstoShoppingList(ingredients:Ingredients[]){
          this.slService.addIngredients(ingredients);
      }
}
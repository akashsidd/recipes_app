import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Response } from "@angular/http";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{

    constructor(private http:HttpClient,private recipeService:RecipeService,
        private authService:AuthService){}
    storeRecipes(){
        const token=this.authService.getToken();    
        return this.http.put('https://ng-recipe-book-5261f.firebaseio.com/recipes.json?auth'+ token ,this.recipeService.getRecipes());
    }
    getRecipes(){
        const token=this.authService.getToken();
        this.http.get('https://ng-recipe-book-5261f.firebaseio.com/recipes.json?auth'+ token).subscribe(
            (response:Response) =>
            {
                const recipes:Recipe[]=response.json();
                this.recipeService.setRecipe(recipes);
            }
        );
    }
}
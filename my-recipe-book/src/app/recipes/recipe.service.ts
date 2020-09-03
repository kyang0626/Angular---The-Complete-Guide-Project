import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('Tasty Schnitzel', 
                   'A super-tasty Schnitzel - just awesome!', 
                   'https://p0.pikist.com/photos/368/734/cordon-bleu-eat-schnitzel-meat-nutrition-food-pork-tasty-lunch.jpg',
                   [
                       new Ingredient('Meat', 1),
                       new Ingredient('French Fries', 20)
                   ]),
        new Recipe('Big Fat Burger', 
                   'What else do you need to say', 
                   'https://p0.pikist.com/photos/703/113/hamburger-burger-fast-food-unhealthy-eat-lunch-meat-fat-diet.jpg',
                   [
                       new Ingredient('Buns', 2),
                       new Ingredient('Meat', 1)
                   ])
      ];

    constructor(private slService: ShoppingListService) {
    }
    
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}
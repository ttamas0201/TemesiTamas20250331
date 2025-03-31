import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe, RecipeResponse } from '../models/Recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private baseUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  getAllRecipes(): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(`${this.baseUrl}`);
  }

  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.baseUrl}/${id}`);
  }
}
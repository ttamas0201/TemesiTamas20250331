import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/Recipes';

@Component({
  selector: 'app-read-recipe',
  standalone: false,
  templateUrl: './read-recipe.component.html',
  styleUrl: './read-recipe.component.css'
})
export class ReadRecipeComponent implements OnInit {
  recipeForm!: FormGroup;
  recipe!: Recipe;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.route.data.subscribe(data => {
      this.recipe = data['recipe'];
      this.populateForm();
    });
  }

  initForm(): void {
    this.recipeForm = this.formBuilder.group({
      name: [{value: '', disabled: true}],
      prepTimeMinutes: [{value: '', disabled: true}],
      cookTimeMinutes: [{value: '', disabled: true}],
      cuisine: [{value: '', disabled: true}]
    });
  }

  populateForm(): void {
    if (this.recipe) {
      this.recipeForm.patchValue({
        name: this.recipe.name,
        prepTimeMinutes: this.recipe.prepTimeMinutes,
        cookTimeMinutes: this.recipe.cookTimeMinutes,
        cuisine: this.recipe.cuisine
      });
    }
  }
}
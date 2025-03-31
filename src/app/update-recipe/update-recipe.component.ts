import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models/Recipes';

@Component({
  selector: 'app-update-recipe',
  standalone: false,
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent implements OnInit {
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
      name: ['', Validators.required],
      prepTimeMinutes: ['', [Validators.required, Validators.min(5)]],
      cookTimeMinutes: ['', [Validators.required, Validators.min(5)]],
      cuisine: ['', Validators.required]
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
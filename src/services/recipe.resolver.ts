import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/Recipes';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<Recipe> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe | any> {
    return of(null); //töröld ki
  }
}
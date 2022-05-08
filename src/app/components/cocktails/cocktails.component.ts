import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Drink } from 'src/app/models/champagne.interface';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.css']
})
export class CocktailsComponent implements OnInit {

  listCocktails: Drink[];

  constructor(
    private cocktailServiceService: CocktailServiceService
  ) {
    this.listCocktails = [];
  }

  ngOnInit(): void {
    this.getCocktails();
  }

  getCocktails(): void {
    this.cocktailServiceService.getCocktails().pipe(
      map(data => {
        return data.drinks;
      })
    ).subscribe(
      {
        next: (cocktail) => {
          this.listCocktails = cocktail;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

}

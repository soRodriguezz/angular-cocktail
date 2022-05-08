import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Drink } from 'src/app/models/champagne.interface';
import { CocktailServiceService } from 'src/app/services/cocktail-service.service';

@Component({
  selector: 'app-champagne',
  templateUrl: './champagne.component.html',
  styleUrls: ['./champagne.component.css']
})
export class ChampagneComponent implements OnInit {

  listChampagne: Drink[];

  constructor(
    private cocktailServiceService: CocktailServiceService
  ) {
    this.listChampagne = [];
  }

  ngOnInit(): void {
    this.getChampagne();
  }

  getChampagne(): void {
    this.cocktailServiceService.getChampagne().pipe(
      map(data => {
        return data.drinks;
      })
    ).subscribe(
      {
        next: (champagne) => {
          this.listChampagne = champagne;
        },
        error: (err) => {
          console.log(err);
        }
      }
    );
  }

}

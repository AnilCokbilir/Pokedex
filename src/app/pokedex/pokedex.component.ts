import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokeNames: any = [];
  allPokeDetails: any = [];
  constructor(public api: FetchApiService) { }

  ngOnInit(): void {
    this.showConfig()


  }

  showAllDetails() {
    this.api.getNames()
      .subscribe((api: any) => {

        this.pokeNames.push(api.results)
        console.log(this.pokeNames)
      });
  }

  showConfig() {
    this.api.getNames()
      .subscribe((api: any) => {

        this.pokeNames.push(api.results)
        console.log(this.pokeNames)
      });
  }

}

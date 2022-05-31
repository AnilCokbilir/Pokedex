import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-view',
  templateUrl: './pokemon-detail-view.component.html',
  styleUrls: ['./pokemon-detail-view.component.scss',
  '../app.component.scss']
})
export class PokemonDetailViewComponent implements OnInit {
 img_pkm = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg";
  constructor() { }
  types = ["bug","grass"]
  ngOnInit(): void {
  }

}

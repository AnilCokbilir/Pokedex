import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss',
  '../app.component.scss'
]
})
export class StartscreenComponent implements OnInit {

  constructor(public api: FetchApiService) { }

  ngOnInit(): void {
    this.showConfig()
  }

  pkmOfDay = {
    name: "bulbasaur",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
    id: 1,
    types: [{type: {name: "grass"}},{type: {name: "poison"}}]
  }
  showConfig() {
    this.api.getConfig()
      .subscribe((api: any) => {
        console.log(api)
      });
  }

}

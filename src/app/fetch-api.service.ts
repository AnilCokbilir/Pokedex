import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FetchApiService implements OnInit {
  allpokemons: any = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {


  }

  getConfig() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/1');
  }
}

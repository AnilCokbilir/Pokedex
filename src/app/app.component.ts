import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navbarIcon = 'navigate_next';
  title = 'pokedexGruppenarbeit';

  changeIcon(){
    if(this.navbarIcon == 'chevron_left'){
      this.navbarIcon = 'navigate_next';
    }else{
      this.navbarIcon = 'chevron_left'
    }
  }
}

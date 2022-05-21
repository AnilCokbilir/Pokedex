import { Component, OnInit } from '@angular/core';
import { FetchApiService } from '../fetch-api.service';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent implements OnInit {

  constructor(public api: FetchApiService) { }

  ngOnInit(): void {
    this.showConfig()
  }

  showConfig() {
    this.api.getConfig()
      .subscribe((api: any) => {
        console.log(api)
      });
  }

}

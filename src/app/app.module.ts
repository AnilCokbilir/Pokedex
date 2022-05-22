import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StartscreenComponent } from './startscreen/startscreen.component';
<<<<<<< HEAD
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
>>>>>>> 01d3d4aee28096a027fb8ab3bc5862d5e3923060

@NgModule({
  declarations: [
    AppComponent,
    StartscreenComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

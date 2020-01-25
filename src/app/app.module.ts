import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterComponent } from './monster/monster.component';
import { HomeComponent } from './home/home.component';
import { MonsterListComponent } from './monster-list/monster-list.component';
import { FamilyComponent } from './family/family.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    HomeComponent,
    MonsterListComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

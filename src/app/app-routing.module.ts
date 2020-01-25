import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonsterComponent } from './monster/monster.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'monster', component: MonsterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
